/*
function timer(seconds) {
    setInterval(function() {
        seconds--;
    }, 1000);
};
This does not work because certain browsers will pause the setInterval if you open a new tab/window or scroll
down the page. This is also an issue with iOS as it will pause the setInterval to maximize the processor and 
make scrolling buttery smooth... So, this should be done instead...
*/

let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    // Clear any existing timers
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds); // This line will run setInterval immediately so it does not take one second to begin the countdown
    //console.log({now, then})
    displayEndTime(then);
    
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop the countdown
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        // display the countdown
        displayTimeLeft(secondsLeft)
        //console.log(secondsLeft);
    }, 1000);
};

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${
        remainderSeconds}`;
    document.title = display; // This will put the countdown timer into the browsers tab. Kinda cool 😎
    timerDisplay.textContent = display;
    //console.log({minutes, remainderSeconds});
};

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At: ${hour}:${minutes < 10 ? '0' : ''}${
        minutes}`;
    console.log(end);
};

function startTimer() {
    const seconds = parseInt(this.dataset.time)
    //console.log(seconds);
    timer(seconds); // Calls line 17 and appends this function to it. I did not know you could do that 🤔
};

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
});