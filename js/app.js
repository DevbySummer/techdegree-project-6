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
// getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
    for(let i = 0; i < arr[randomNumber].length; i++) { // loop through randomly selecter array from 'phrases' array
        let li = document.createElement('li'); // create 'li'
        arr[randomNumber][i] = li.textContent; // add content to 'li[i]'
        ul.appendChild(li); // attach 'li' with content to 'ul'
        if( something == true ){ // test for character or white space
            li.classList.add('letter'); // add class to character
        }
    }
    const phraseArray = getRandomPhraseAsArray(phrases);
};
addPhraseToDisplay(phraseArray);


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

qwerty.addEventListener('click' , (e) => {
    if (e.target.tagName == 'BUTTON')
    {
        e.target.classList.add('chosen')
        // document.querySelectorAll('.chosen').disabled = true;
        e.target.disabled = true;
        let results = checkLetter(e.target);
        if(results === false)
        {
            for(let i = 0; i <lis.length; i++) {
                lis[i].pop;
                missed =+ 1;
            }
        }
    } 
});
// style.display ='disabled';
// qwerty.addEventListener('click' , (e) => {
//     if (e.target.tagName !== 'BUTTON' || Button.className == 'chosen')
//     {

//     } else {
//         button.classList.add('chosen')
//         let results = checkLetter();
//         if(results === false)
//         {
//             for(let i = 0; i <lis.length; i++) {
//                 lis[i].pop;
//                 missed =+ 1;
//             }
//         }
//     }
// });