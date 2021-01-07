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
return arr[randomNumber];
};

function addPhraseToDisplay(arr) {
    for(let i = 0; i < arr.length; i++) { // loop through randomly selected array from 'phrases' array
        let li = document.createElement('li'); // create 'li'
        li.textContent = arr[i]; // add content to 'li[i]'
        let ul = phrase.querySelector('ul'); // declare ul
        ul.appendChild(li); // attach 'li' with content to 'ul'
        if( arr[i] != ' ' ){ // test for character or white space
            li.classList.add('letter'); // add class letter to character
        }
        else {
            li.classList.add('space'); // add class space to character
        }
    }
};
const phraseArray = getRandomPhraseAsArray(phrases);
// addPhraseToDisplay(phraseArray);
addPhraseToDisplay(phraseArray.toLowerCase());

function checkLetter(btn) { 
    let lis = phrase.getElementsByTagName('li'); // lis is equal to all li's
    let match = null;

    for(let i = 0; i < lis.length; i++) {
        if(btn === lis[i].textContent) {
            lis[i].classList.add('show');
            match = btn.textContent;
        }
    }
    return match;
};

qwerty.addEventListener('click', (event) => {
    let keyrow = qwerty.querySelectorAll('.keyrow');
    let button = qwerty.getElementsByTagName('button');
    if ( event.target.tagName === 'BUTTON' && button.classList != 'chosen' ) {
        event.target.classList.add('chosen');
        event.target.disabled = true;
        const letterFound = checkLetter(event.target.textContent);
        if (letterFound.value == null) {
            let ol = scoreboard.getElementsByTagName('ol')[0];
            ol = li.parentNode;
            ol.removeChild('li');
            missed =+ 1;
        }
    }
    
});










// qwerty.addEventListener('click' , (e) => {
//     if (e.target.tagName == 'BUTTON')
//     {
//         e.target.classList.add('chosen')
//         e.target.disabled = true;
//         let results = checkLetter(e.target);
//         if(results === false)
//         {
//             for(let i = 0; i <lis.length; i++) {
//                 lis[i].pop;
//                 missed =+ 1;
//             }
//         }
//     } 
// });