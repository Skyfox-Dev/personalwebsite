var audio = document.getElementById("myAudio");
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");

function playmusic() {
    var audio = document.getElementById("myAudio");
    audio.play();
    songTitle.textContent =  "brokenbeats.net";
    audio.volume = 0.2;
}

function stopmusic() {
    var audio = document.getElementById("myAudio");
    audio.pause();
}



