// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImage = document.querySelector('#explore img');
  const textToSpeak = document.querySelector('#text-to-speak');
  const voiceSelect = document.querySelector('#voice-select');
  const talkButton = document.querySelector('#explore button');

  const synth = window.speechSynthesis;
  let voices = [];

  const populateVoices = () => {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = String(index);
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  };

  talkButton.addEventListener('click', () => {
    const spokenText = textToSpeak.value.trim();
    if (!spokenText) {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(spokenText);
    const selectedIndex = Number(voiceSelect.value);
    if (!Number.isNaN(selectedIndex) && voices[selectedIndex]) {
      utterance.voice = voices[selectedIndex];
    }

    utterance.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Open mouthed face';
    });

    const setSmilingFace = () => {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };

    utterance.addEventListener('end', setSmilingFace);
    utterance.addEventListener('error', setSmilingFace);

    synth.cancel();
    synth.speak(utterance);
  });

  populateVoices();
  synth.addEventListener('voiceschanged', populateVoices);
}