const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
    // const method = video.paused ? .play : .pause;
        // video.[method]();
        // alternate solution
        if(video.paused) {
            video.play();
        } else {
            video.pause();
        }
};

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
    //console.log(icon)
};

function skip() {
    //console.log('You have been skipped broski')
    video.currentTime += parseFloat(this.dataset.skip)
};

function handleRangeUpdates() {
    console.log(this.value)
};

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdates));