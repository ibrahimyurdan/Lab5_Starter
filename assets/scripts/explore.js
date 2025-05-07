// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textToSpeak = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('img');
  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', function() {
    const text = textToSpeak.value;
    const selectedOption = voiceSelect.selectedOptions[0];
    const voice = voices.find(v => v.name === selectedOption.getAttribute('data-name'));

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;

    utterance.onstart = function() {
      faceImage.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = function() {
      faceImage.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}