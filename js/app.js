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
            match = btn;
            // match = btn.textContent; // this is the same as saying: match = event.target.textContent.textContent
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
        if (letterFound == null) {
            let ol = document.querySelectorAll('#scoreboard ol li img');
            ol[missed].src = "images/lostHeart.png";
            missed += 1;
        }
    }
    checkWin();
});
function checkWin() {
    let letter = document.querySelectorAll(".letter"); // declare variable
    let show = document.querySelectorAll(".show"); // declare variable
    const overlay = document.getElementById('overlay'); // reuse variable
    if ( show.length == letter.length ) {
        overlay.style.display = 'block';
        // overlay.className = 'win';
        overlay.classList.add("win")
    }
    if ( missed >= 5 ) {
        overlay.style.display = 'block';
        // overlay.className = 'lose';
        overlay.classList.add('lose');
    }
};