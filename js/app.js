const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn__reset = document.getElementsByClassName('btn__reset')[0]; // this will always return an HTML Collection
let missed = 0;

const phrases = ['This is my first phrase of the array',
            'This is my second phrase of the array',
            'This is my third Phrase of the array',
            'This is my forth Phrase of the array',
            'This is my first Phrase of the array'
        ];

btn__reset.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

function getRandomPhraseAsArray(arr) { // returns random array
let randomNumber = Math.floor(Math.random() * phrases.length);
// arr[randomNumber].indexOf =  arrayIndex;
return arr[randomNumber];
};
getRandomPhraseAsArray(phrases);


function checkLetter(btn) { 
    const lis = document.getElementsByTagName('li');
    let match = null;

    for(let i = 0; i < lis.length; i++) {
        if(btn === li[i].textContent) {
            li[i].classList.add('show');
            match = btn.textContent;
        }
    }
    return match;
};
checkLetter();

qwerty.addEventListener('click' , () => {
    
});