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

document.addEventListener("DOMContentLoaded", () => {
  tsParticles.load("tsparticles", {
    particles: {
      number: { value: 150, density: { enable: true, area: 800 } },
      color: { value: "#626775ff" },
      shape: { type: "circle" },
      opacity: { value: 0.4 },
      size: { value: { min: 2, max: 5 } },
      move: {
        enable: true,
        speed: 1,
        direction: "bottom",
        straight: false,
        outModes: { default: "out" }
      }
    },
    interactivity: { detectsOn: "canvas", events: { onHover: { enable: false }, onClick: { enable: false } } },
    detectRetina: true
  });
});


