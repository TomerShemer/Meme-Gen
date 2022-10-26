'use strict'

let gKeywordSearchCountMap = {
    'trump': 2,
    'dog': 16,
    'cute': 12
}

let gImgs = [
    {
        id: 1,
        url: 'img/memes/1.jpg',
        keywords: ['trump'],
    },
    {
        id: 2,
        url: 'img/memes/2.jpg',
        keywords: ['dog', 'cute'],
    },
    {
        id: 3,
        url: 'img/memes/3.jpg',
        keywords: ['dog', 'sleep'],
    }
];

let gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        },
        {
            txt: 'bla bla',
            size: 50,
            align: 'center',
            color: 'blue'
        },
        {
            txt: 'Hello',
            size: 50,
            align: 'right',
            color: 'green'
        },
        // {
        //     txt: 'World',
        //     size: 45,
        //     align: 'right',
        //     color: 'pink'
        // },
    ]
}


function getMeme() {
    return gMeme
}