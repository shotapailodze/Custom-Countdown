const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownform');
const dateEl = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';

// Set Date Input Min With Today's Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Take Values from Form Input
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    console.log(countdownDate, countdownTitle);
}

// Event Listener
countdownForm.addEventListener('submit',updateCountdown);