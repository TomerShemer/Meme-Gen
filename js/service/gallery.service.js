'use strict'

let gImgs = [
    { id: 1, url: 'img/memes/2.jpg', keywords: ['trump'], },
    { id: 2, url: 'img/memes/003.jpg', keywords: ['dog', 'cute'], },
    { id: 3, url: 'img/memes/004.jpg', keywords: ['dog', 'sleep'], },
    { id: 4, url: 'img/memes/5.jpg', keywords: ['dog', 'sleep'], },
    { id: 5, url: 'img/memes/005.jpg', keywords: ['dog', 'sleep'], },
    { id: 6, url: 'img/memes/006.jpg', keywords: ['dog', 'sleep'], },
    { id: 7, url: 'img/memes/8.jpg', keywords: ['dog', 'sleep'], },
    { id: 8, url: 'img/memes/9.jpg', keywords: ['dog', 'sleep'], },
    { id: 9, url: 'img/memes/12.jpg', keywords: ['dog', 'sleep'], },
    { id: 10, url: 'img/memes/19.jpg', keywords: ['dog', 'sleep'], },
    { id: 11, url: 'img/memes/Ancient-Aliens.jpg', keywords: ['dog', 'sleep'], },
    { id: 12, url: 'img/memes/drevil.jpg', keywords: ['dog', 'sleep'], },
    { id: 13, url: 'img/memes/img2.jpg', keywords: ['dog', 'sleep'], },
    { id: 14, url: 'img/memes/img4.jpg', keywords: ['dog', 'sleep'], },
    { id: 15, url: 'img/memes/img5.jpg', keywords: ['dog', 'sleep'], },
    { id: 16, url: 'img/memes/img6.jpg', keywords: ['dog', 'sleep'], },
    { id: 17, url: 'img/memes/img11.jpg', keywords: ['dog', 'sleep'], },
    { id: 18, url: 'img/memes/img12.jpg', keywords: ['dog', 'sleep'], },
    { id: 19, url: 'img/memes/leo.jpg', keywords: ['dog', 'sleep'], },
    { id: 20, url: 'img/memes/meme1.jpg', keywords: ['dog', 'sleep'], },
    { id: 21, url: 'img/memes/One-Does-Not-Simply.jpg', keywords: ['dog', 'sleep'], },
    { id: 22, url: 'img/memes/Oprah-You-Get-A.jpg', keywords: ['dog', 'sleep'], },
    { id: 23, url: 'img/memes/patrick.jpg', keywords: ['dog', 'sleep'], },
    { id: 24, url: 'img/memes/putin.jpg', keywords: ['dog', 'sleep'], },
    { id: 25, url: 'img/memes/X-Everywhere.jpg', keywords: ['dog', 'sleep'], },

]

function getImgs() {
    return gImgs
}

function setImg(idx) {
    const meme = getMeme()
    meme.selectedImgId = idx
}