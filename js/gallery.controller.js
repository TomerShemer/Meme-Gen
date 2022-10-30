'use strict'


function onInit() {
    console.log('Init');
    initGallery()
    renderDataList()
}

function initGallery() {
    renderGallery()
}

function renderGallery() {
    const imgs = getImgs()
    let strHtmls = ''

    imgs.forEach(({ id, url }, idx) => {
        strHtmls += `
            <article class="item">
                <img onclick="onSetImg(${idx})" src="${url}" alt="${id}">
            </article>
            `
    })

    document.querySelector('.imgs-container').innerHTML = strHtmls
}

function onOpenGallery() {
    resetMeme()
    const elBody = document.querySelector('body')
    if (!elBody.classList.contains('editor-open')) return

    elBody.classList.remove('editor-open')
    document.querySelector('.btn-gallery').classList.add('active')
}

function onSetImg(idx) {
    setImg(idx)
    initEditor()
    onOpenEditor()
}

function onGenerateRandMeme() {
    generateRandMeme()
}

function onSearchImg(txt) {
    updateFilterBy(txt)
    renderGallery()
}

function renderDataList() {
    let strHtmls = ''
    const keywords = getKeywords()
    const elDatalist = document.querySelector('#keywords')

    keywords.forEach(keyword => {
        strHtmls += `<option onclick="onSearchImg('${keyword}')" value="${keyword}">${keyword}</option>
    `})

    elDatalist.innerHTML = strHtmls
}