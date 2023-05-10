var audio = document.getElementById("myAudio");
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var songTitle = document.getElementById("songTitle");
var playlist = [
    "HIRATHAE - Kentenshi.mp3",
    "Ok Goodnight - Day & Night.mp3",
    "Panic At The Disco! - I Write Sins Not Tragedies.mp3",
    "Tokyopill - Club Cyberia.mp3",
    "xaptiox - soup.mp3"
  ];

function playmusic() {
    var audio = document.getElementById("myAudio");
    var randomIndex = Math.floor(Math.random() * playlist.length);
    var randomSong = playlist[randomIndex];
    audio.src = randomSong;
    audio.play();
    songTitle.textContent = audio.src;
}

function stopmusic() {
    var audio = document.getElementById("myAudio");
    audio.pause();
}

