let soundActive = false;
let coinCollectSound = new Audio('audio/341695__projectsu012__coins-1.wav');
let bottleHitsGroundSound = new Audio('audio/bottle_smash_short.mp3');
let bottleCollectSound = new Audio('audio/332629__treasuresounds__item-pickup.ogg');
let walkingSound = new Audio('audio/388289__pan14__foley_footsteps_desert_boots_sand.wav');
let getHurtSound = new Audio('audio/44428__thecheeseman__hurt1.wav');
let jumpSound = new Audio('audio/537151__dastudiospr__whohoo.mp3');
let winSound = new Audio('audio/162458__kastenfrosch__gewonnen2.mp3');
let endbossHurtSound = new Audio('audio/413823__henlord__chicken-scream-soft.wav');
let backgroundMusic = new Audio('audio/background.wav');
let endbossMusic = new Audio('audio/77160__robinhood76__01186-village-walk-3.wav');

/**
 * Toggles the global sound state and updates all sounds and sound icon accordingly.
 */

function initGame() {
    updateAllSounds();
    updateSoundButtonIcon();
}

function playAudio(audio) {
    if (soundActive && audio) {
        audio.play();
        audio.volume = 0.5;
    }
}

/**
 * Updates the sound button icon based on the current sound state
 */

function toggleSoundActive() {
    soundActive = !soundActive;
    updateAllSounds();
    updateSoundButtonIcon();
}

function updateSoundButtonIcon() {
    const soundIcon = soundActive ? 'icons/volume.png' : 'icons/volume-off-indicator.png';
    document.getElementById('sound-img').src = soundIcon;
}

function updateAllSounds() {
    if (soundActive) {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            backgroundMusic.volume = 0.2;
        }
    } else {
        stopAllSounds();
    }
}

function stopAllSounds() {
    let sounds = [coinCollectSound, bottleHitsGroundSound, bottleCollectSound, walkingSound, getHurtSound, jumpSound, winSound, endbossHurtSound, backgroundMusic, endbossMusic];
    sounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    });
}

window.onload = initGame;
