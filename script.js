//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
let currentAudio = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentAudio) {
            currentAudio.pause();
        }
        const soundFile = button.getAttribute('data-sound');
        currentAudio = new Audio(`sounds/${soundFile}`);
        currentAudio.play();
    });
});

stopButton.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset to start
    }
});