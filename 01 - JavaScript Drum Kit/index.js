function removeTransition(event) {
    if(event.propertyName !== 'transform') return;
    //console.log(event.propertyName);
    // this.classList.remove('playing');
    event.target.classList.remove('playing'); //This line was in the finished.html but not in the course
};

function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    if(!audio) return; // stop the function from running all together
    
    key.classList.add('playing')
    audio.currentTime = 0;
    audio.play();
    //console.log(key);
    //console.log(audio);
    //console.log(event.keyCode);
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);