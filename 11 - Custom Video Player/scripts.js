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
    video[this.name] = this.value
};

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
};

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
};

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

progress.addEventListener('click', scrub);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdates));

let mousedown = false;
    progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
/* progress.addEventListener('mousemove', () => {
    if(mousedown) {
        scrub()
    } */
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);