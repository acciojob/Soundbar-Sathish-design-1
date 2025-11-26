let currentAudio = null;

function playSound(sound) {
    if (currentAudio) {
        currentAudio.pause(); // Stop the currently playing sound
    }
    currentAudio = new Audio(sound);
    currentAudio.play();
}

function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset to the start
    }
}