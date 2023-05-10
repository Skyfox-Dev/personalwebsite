var audio = document.getElementById("myAudio");
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");

function playmusic() {
    var audio = document.getElementById("myAudio");
    audio.play();
}

function stopmusic() {
    var audio = document.getElementById("myAudio");
    audio.pause();

}

function setVolume() {
    var audio = document.getElementById("myAudio");
    var volumeControl = document.getElementById("volumeControl");
    audio.volume = volumeControl.value;
  }