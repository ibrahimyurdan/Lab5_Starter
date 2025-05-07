// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audio = document.querySelector('audio');
  const image = document.querySelector('img');
  
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', function() {
    const selectedHorn = this.value;
    if (selectedHorn === 'select') return;

    image.src = `assets/images/${selectedHorn}.svg`;
    image.alt = `${selectedHorn} image`;

    audio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  volumeSlider.addEventListener('input', function() {
    const volume = this.value;
    
    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }

    audio.volume = volume / 100;
  });

  playButton.addEventListener('click', function() {
    audio.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}