'use strict'

let gElCanvas
let gCtx
let gIsDrag
let gCurrFont

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function onInit() {
    console.log('Init');
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
    document.querySelector('.input-text').value = meme.selectedLineIdx

    drawImg(meme)
}

function drawImg(meme) {
    const img = new Image()
    img.src = `img/memes/${meme.selectedImgId}.jpg`

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

        // gCtx.font = `${size}px ${font}`
        gCtx.font = `100px ${font}`

        // gCtx.textAlign = `${align}`
        // gCtx.textAlign = `center`

        gCtx.fillStyle = `${color}`
        gCtx.strokeColor = strokeColor

        let canvasX = gElCanvas.width / 2
        let canvasY

        console.log(gCtx.measureText(txt));
        const textWidth = gCtx.measureText(txt).width

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
                canvasY = size * 2.5
                break;
            case 1:
                canvasY = gElCanvas.height - size / 2
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
    console.log('txt', txt)
}