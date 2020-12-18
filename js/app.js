const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn__reset = document.getElementsByClassName('btn__reset');
const missed = 0;

var phrases = ['This is my first phrase of the array',
            'This is my second phrase of the array',
            'This is my third Phrase of the array',
            'This is my forth Phrase of the array',
            'This is my first Phrase of the array'];

btn__reset.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});