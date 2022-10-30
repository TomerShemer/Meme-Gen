'use strict'

const KEYWORDS = ['Field', 'Dog', 'Angry', 'Trump', 'Cute', 'Baby',
    'Success', 'Sleep', 'Cat', 'Willi Wonka', 'Laugh', 'You', 'History Channel',
    'Aliens', 'Dr Evil', 'Dancing', 'Obama', 'Kiss', 'Toast', 'Matrix',
    'Sean Bean', 'Mordor', 'Oprah', 'Pickard', 'Putin', 'Everywhere']

let gFilterBy = { txt: '' }


let gImgs = [
    { id: 1, url: 'img/memes/2.jpg', keywords: ['field'], },
    { id: 2, url: 'img/memes/003.jpg', keywords: ['trump', 'angry'], },
    { id: 3, url: 'img/memes/004.jpg', keywords: ['dog', 'cute'], },
    { id: 4, url: 'img/memes/5.jpg', keywords: ['baby', 'success'], },
    { id: 5, url: 'img/memes/005.jpg', keywords: ['dog', 'sleep', 'baby'], },
    { id: 6, url: 'img/memes/006.jpg', keywords: ['cat', 'sleep'], },
    { id: 7, url: 'img/memes/8.jpg', keywords: ['willi wonka'], },
    { id: 8, url: 'img/memes/9.jpg', keywords: ['baby', 'laugh'], },
    { id: 9, url: 'img/memes/12.jpg', keywords: ['you'] },
    { id: 10, url: 'img/memes/19.jpg', keywords: ['angry'], },
    { id: 11, url: 'img/memes/Ancient-Aliens.jpg', keywords: ['history channel', 'aliens'], },
    { id: 12, url: 'img/memes/drevil.jpg', keywords: ['dr evil'], },
    { id: 13, url: 'img/memes/img2.jpg', keywords: ['baby', 'dancing'], },
    { id: 14, url: 'img/memes/img4.jpg', keywords: ['trump', 'angry'], },
    { id: 15, url: 'img/memes/img5.jpg', keywords: ['baby'], },
    { id: 16, url: 'img/memes/img6.jpg', keywords: ['dog'], },
    { id: 17, url: 'img/memes/img11.jpg', keywords: ['obama', 'laugh'], },
    { id: 18, url: 'img/memes/img12.jpg', keywords: ['kiss', 'homie'], },
    { id: 19, url: 'img/memes/leo.jpg', keywords: ['toast', 'leonardo'], },
    { id: 20, url: 'img/memes/meme1.jpg', keywords: ['morpheus', 'matrix'], },
    { id: 21, url: 'img/memes/One-Does-Not-Simply.jpg', keywords: ['sean bean', 'mordor'], },
    { id: 22, url: 'img/memes/Oprah-You-Get-A.jpg', keywords: ['oprah'], },
    { id: 23, url: 'img/memes/patrick.jpg', keywords: ['pickard'], },
    { id: 24, url: 'img/memes/putin.jpg', keywords: ['putin'], },
    { id: 25, url: 'img/memes/X-Everywhere.jpg', keywords: ['everywhere', 'toystory'], },
]


function getImgs() {
    if (!gFilterBy.txt) return gImgs

    //filter by text
    let imgs = gImgs.filter(img => {
        let isFound = false
        img.keywords.forEach(word => {
            if (word.includes(gFilterBy.txt.toLowerCase())) isFound = true
        })
        return isFound
    })
    return imgs
}

function setImg(idx) {
    const meme = getMeme()
    meme.selectedImgId = idx
}

function generateRandMeme() {
    const meme = getMeme()
    meme.lines = []
    const randId = getRandomIntInclusive(0, gImgs.length - 1)
    const numOfLines = Math.random() > 0.5 ? 1 : 2
    for (let i = 0; i < numOfLines; i++) {
        createRandLine()
    }
    meme.selectedLineIdx = numOfLines - 1


    onSetImg(randId)
}

function updateFilterBy(txt) {
    gFilterBy.txt = txt
}

function getKeywords() {
    return KEYWORDS
}