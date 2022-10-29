'use strict'

let gElCanvas
let gCtx
let gIsDrag
let gCurrFont

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']
const randMemeLines = ['lorem']

function initEditor() {
    gElCanvas = document.querySelector('.canvas')
    gCtx = gElCanvas.getContext('2d')

    gCurrFont = document.querySelector('.select-font').value

    resizeCanvasWidth() // move later
    renderMeme() // move later
    addListeners()
}

function addListeners() {
    window.addEventListener('resize', () => {
        resizeCanvasWidth()
        renderMeme()
    })
    document.querySelector('.input-text').addEventListener('focusout', function () {
        const txt = document.querySelector('.input-text').value
        if (!txt) onDeleteCurrLine()
    })
}

function onOpenEditor() {
    document.querySelector('body').classList.add('editor-open')
    document.querySelector('.btn-gallery').classList.remove('active')
    initEditor()
}

function onDeleteCurrLine() {
    deleteCurrLine()
    renderMeme()
}

function resizeCanvasWidth() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    clearCanvas()
}

function resizeCanvasHeight(height) {
    gElCanvas.height = height
    document.querySelector('.canvas-container').style.height = `${height}px`
    clearCanvas()
}

function clearCanvas() {
    gCtx.fillStyle = "#fff"
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function renderMeme() {
    const meme = getMeme()
    renderInputByLineIdx()
    renderColorInput()
    drawImg(meme)
}

function renderInputByLineIdx() {
    const meme = getMeme()
    const elInput = document.querySelector('.input-text')
    if (meme.lines.length) {
        const { selectedLineIdx } = meme
        elInput.value = meme.lines[selectedLineIdx].txt
    } else {
        elInput.value = ''
    }
    elInput.focus()
}

function renderColorInput() {
    const meme = getMeme()
    if (!meme.lines.length) return
    const elInput = document.querySelector('.input-fill-color')
    elInput.value = meme.lines[meme.selectedLineIdx].color
}

function drawImg(meme) {
    const img = new Image()
    const url = getImgs()[meme.selectedImgId].url
    img.src = `${url}`

    img.onload = () => {
        // resize canvas and container height
        const height = (img.height * gElCanvas.width) / img.width
        resizeCanvasHeight(height)

        // fill image
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xEnd,yEnd
        drawText(meme)

    }
}

function drawText(meme) {
    if (!meme.lines.length) return

    // TODO: add loop
    meme.lines.forEach((line, idx) => {

        // fill text
        const { size, txt, align, color } = line
        const font = document.querySelector('.select-font').value
        const strokeColor = document.querySelector('.input-stroke-color').value

        gCtx.lineWidth = Math.ceil(size / 5)

        gCtx.font = `${size}px ${font}`
        // gCtx.font = `100px ${font}`

        gCtx.textAlign = `${align}`
        // gCtx.textAlign = `center`

        gCtx.fillStyle = `${color}`
        gCtx.strokeStyle = strokeColor

        let canvasX
        let canvasY

        // console.log(gCtx.measureText(txt));
        // const textWidth = gCtx.measureText(txt).width

        switch (align) {
            case 'center':
                canvasX = gElCanvas.width / 2
                gCtx.textAlign = 'center'
                break
            case 'right':
                canvasX = 10
                gCtx.textAlign = 'left'
                break
            case 'left':
                canvasX = gElCanvas.width - 10
                gCtx.textAlign = 'right'
                break
        }

        switch (idx) {
            case 0:
                canvasY = size
                break;
            case 1:
                canvasY = gElCanvas.height - 10
                break
            default:
                canvasY = gElCanvas.height / 2
                break;
        }


        gCtx.strokeText(`${txt}`, canvasX, canvasY, gElCanvas.width - 20)
        gCtx.fillText(`${txt}`, canvasX, canvasY, gElCanvas.width - 20)
    })

}

function onChangeText(txt) {
    // console.log('txt', txt)
    changeText(txt)
    renderMeme()
}

function onChangeLine() {
    changeLine()
    renderInputByLineIdx()
    renderColorInput()
}

function onAddLine() {
    addLine()
    renderInputByLineIdx()
    document.querySelector('.input-text').focus()
}

function getCurrColor() {
    return document.querySelector('.input-fill-color').value
}

function onChangeFontSize(diff) {
    const meme = getMeme()
    if (!meme.lines.length) return
    const currSize = meme.lines[meme.selectedLineIdx].size
    if (currSize <= 10 && diff === -1 ||
        currSize >= 150 && diff === 1) return

    changeFontSize(diff)
    renderMeme()
}

function onChangeAlign(dir) {
    changeAlign(dir)
    renderMeme()
}

function onChangeFillColor(color) {
    changeFillColor(color)
    renderMeme()
}

function onDownloadCanvas(elLink) {
    // Gets the canvas content and convert it to base64 data URL that can be save as an image
    const data = gElCanvas.toDataURL(/* DEFAULT: 'image/png'*/) // Method returns a data URL containing a representation of the image in the format specified by the type parameter.
    // console.log('data', data) // Decoded the image to base64 
    elLink.href = data // Put it on the link
    elLink.download = 'my-meme' // Can change the name of the file
}