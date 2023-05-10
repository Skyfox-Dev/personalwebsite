var audio = document.getElementById("myAudio");
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var songTitle = document.getElementById("songTitle");
var playlist = [
  "HIRATHAE - Kentenshi.mp3",
];

function playmusic() {
  var randomIndex = Math.floor(Math.random() * playlist.length);
  var randomSong = playlist[randomIndex];
  audio.src = randomSong;
  audio.play();
  songTitle.textContent = "Now Playing: " + randomSong;
}

function stopmusic() {
  audio.pause();
}

playBtn.addEventListener("click", playRandomSong);
pauseBtn.addEventListener("click", stopmusic);


