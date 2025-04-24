let audio = document.getElementById("audio");
let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let seek = document.getElementById("seek");
let currentTimeDisplay = document.getElementById("currentTime");
let durationDisplay = document.getElementById("duration");


let musicName = [
    { ism: "macan.mp3" },
    { ism: "nemoya.mp3" },
    { ism: "popolam.mp3" }
];


let i = 0;

playButton.onclick = () => audio.play();
pauseButton.onclick = () => audio.pause();
nextButton.onclick = () => nextAudio();
prevButton.onclick = () => prevAudio();

function nextAudio() {
    i++;
    if (i >= musicName.length) i = 0;
    audio.src = musicName[i].ism;
    audio.play();
}

function prevAudio() {
    i--;
    if (i < 0) i = musicName.length - 1;
    audio.src = musicName[i].ism;
    audio.play();
}

audio.addEventListener("loadedmetadata", () => {
    seek.max = Math.floor(audio.duration);
    durationDisplay.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
    seek.value = Math.floor(audio.currentTime);
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

seek.addEventListener("input", () => {
    audio.currentTime = seek.value;
});

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    if (sec < 10) sec = "0" + sec;
    return `${min}:${sec}`;
}
