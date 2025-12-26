var audio = document.getElementById("myAudio");
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");

function playmusic() {
    var audio = document.getElementById("myAudio");
    audio.volume = 0.2;
    audio.play();
    var songTitle = document.getElementById("songTitle");
    songTitle.textContent = "stream.skyfoxius.de";
}

function stopmusic() {
    var audio = document.getElementById("myAudio");
    audio.pause();
}

function changeVolume(volume) {
    var audio = document.getElementById("myAudio");
    audio.volume = volume;
}

tsParticles.load("tsparticles", {
  particles: {
    number: {
      value: 150, // Anzahl der Schneeflocken
      density: { enable: true, area: 800 }
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.8 },
    size: { value: { min: 2, max: 5 } },
    move: {
      enable: true,
      speed: 1,       // Schneefallgeschwindigkeit
      direction: "bottom",
      straight: false,
      outModes: { default: "out" }
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: { onHover: { enable: false }, onClick: { enable: false } }
  },
  detectRetina: true
});

