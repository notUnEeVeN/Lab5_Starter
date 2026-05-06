// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const face = document.getElementsByTagName('img')[0];
  const inputTxt = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const button = document.getElementsByTagName('button')[0];

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (const voice of voices) {
      const option = document.createElement('option');
      option.textContent = voice.name + ' (' + voice.lang + ')';

      if (voice.default) {
        option.textContent += ' - DEFAULT';
      }

      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener('click', function () {
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);

    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }

    utterThis.onstart = function () {
      face.src = 'assets/images/smiling-open.png';
    };

    utterThis.onend = function () {
      face.src = 'assets/images/smiling.png';
    };

    synth.speak(utterThis);
  });
}