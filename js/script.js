// Create waveform
const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#fef3ed',
    progressColor: '#c46b47',
    height: 30,
    barWidth: 2,
    responsive: true
});

// Load audio file
wavesurfer.load('media/skyline.mp3');

// Hook up play/pause button
const playPauseBtn = document.getElementById('play-pause');
const playPauseIcon = document.getElementById('play-pause-icon');

playPauseBtn.addEventListener('click', () => {
    wavesurfer.playPause();

    if (wavesurfer.isPlaying()) {
        playPauseIcon.src = "images/pause.png";
    } else {
        playPauseIcon.src = "images/play.png";
    }
});

// Change icon when song ends
wavesurfer.on('finish', () => {
    playPauseIcon.src = "images/play.png";

});
