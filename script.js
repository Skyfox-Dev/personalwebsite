var audio = document.getElementById("myAudio");
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var playlist = [
    "HIRATHAE - Kentenshi.mp3",
    "Tokyopill - Club Cyberia.mp3",
    "xaptiox - soup.mp3",
  ];

function playmusic() {
    var audio = document.getElementById("myAudio");
    var randomIndex = Math.floor(Math.random() * playlist.length);
    var randomSong = playlist[randomIndex];
    audio.src = randomSong;
    audio.play();
}

function stopmusic() {
    var audio = document.getElementById("myAudio");
    audio.pause();
}

