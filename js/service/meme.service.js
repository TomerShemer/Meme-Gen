'use strict'

let gKeywordSearchCountMap = {
    'trump': 2,
    'dog': 16,
    'cute': 12
}

const randLines = ['Going for a walk', 'Be cool', 'Sitting at home', 'Perfect', 'Trying to sleep', 'Having some trouble', 'Very helpful']

let gMeme = {
    selectedImgId: 8,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 25,
            align: 'center',
            color: '#ffffff'
        },

    ]
}

function getMeme() {
    return gMeme
}

function changeText(txt) {
    if (!gMeme.lines.length) addLine()
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function changeLine() {
    if (!gMeme.lines.length) return
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx > gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
}

function addLine() {
    gMeme.lines.push({
        txt: '',
        size: 30,
        align: 'center',
        color: getCurrColor()
    })
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function deleteCurrLine() {
    if (!gMeme.lines.length) return
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = gMeme.selectedLineIdx - 1 >= 0 ? --gMeme.selectedLineIdx : gMeme.lines.length - 1
    if (gMeme.selectedLineIdx < 0) gMeme.selectedLineIdx = 0
}

function changeFontSize(diff) {
    if (!gMeme.lines.length) return
    gMeme.lines[gMeme.selectedLineIdx].size += diff
}

function changeAlign(dir) {
    if (!gMeme.lines.length) return
    gMeme.lines[gMeme.selectedLineIdx].align = dir
}

function changeFillColor(color) {
    if (!gMeme.lines.length) return
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function createRandLine() {
    gMeme.lines.push({
        txt: randLines[getRandomIntInclusive(0, randLines.length - 1)],
        size: getRandomIntInclusive(20, 80),
        align: 'center',
        color: getRandomColor()
    })
}