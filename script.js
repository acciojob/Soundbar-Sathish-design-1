document.addEventListener('DOMContentLoaded', () => {
    let currentAudio = null;

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            // Stop the currently playing audio
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0; // Reset to start
            }

            // Get the sound file from the button's data attribute
            const soundFile = button.getAttribute('data-sound');
            currentAudio = new Audio(`sounds/${soundFile}`);
            currentAudio.play().catch(error => {
                console.error('Error playing sound:', error);
            });
        });
    });

    document.querySelector('.stop').addEventListener('click', () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; // Reset to start
            currentAudio = null; // Reset currentAudio
        }
    });
});