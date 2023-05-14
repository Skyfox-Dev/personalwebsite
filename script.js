var audio = document.getElementById("myAudio");
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");

function playmusic() {
    var audio = document.getElementById("myAudio");
    audio.play();
    songTitle.textContent =  "brokenbeats.net";
}

function stopmusic() {
    var audio = document.getElementById("myAudio");
    audio.pause();
}



