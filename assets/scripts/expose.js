// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let horn = document.getElementById('horn-select');
  let img = document.getElementsByTagName('img')[0];
  let icon = document.getElementsByTagName('img')[1];
  let audio = document.getElementsByTagName('audio')[0];
  let volume = document.getElementById('volume');
  let button = document.getElementsByTagName('button')[0];

  horn.addEventListener('change', function () {
    img.src = 'assets/images/' + horn.value + '.svg';
    audio.src = 'assets/audio/' + horn.value + '.mp3';
  });

  volume.addEventListener('input', function () {
    let v = volume.value;
    audio.volume = v / 100;

    if (v == 0) icon.src = 'assets/icons/volume-level-0.svg';
    else if (v < 33) icon.src = 'assets/icons/volume-level-1.svg';
    else if (v < 67) icon.src = 'assets/icons/volume-level-2.svg';
    else icon.src = 'assets/icons/volume-level-3.svg';
  });

  button.addEventListener('click', function () {
    audio.play();

    if (horn.value === 'party-horn') {
      let confetti = new JSConfetti();
      confetti.addConfetti();
    }
  });
}