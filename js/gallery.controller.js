'use strict'


function onInit() {
    console.log('Init');
    initGallery()
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