// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.querySelector('#horn-select');
  const hornImage = document.querySelector('#expose img');
  const volumeSlider = document.querySelector('#volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const hornAudio = document.querySelector('#expose audio');
  const jsConfetti = new JSConfetti();

  const hornAssets = {
    'air-horn': {
      image: 'assets/images/air-horn.svg',
      sound: 'assets/audio/air-horn.mp3',
    },
    'car-horn': {
      image: 'assets/images/car-horn.svg',
      sound: 'assets/audio/car-horn.mp3',
    },
    'party-horn': {
      image: 'assets/images/party-horn.svg',
      sound: 'assets/audio/party-horn.mp3',
    },
  };

  const updateVolume = () => {
    const sliderValue = Number(volumeSlider.value);
    hornAudio.volume = sliderValue / 100;

    if (sliderValue === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (sliderValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (sliderValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  };

  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornAssets[hornSelect.value];
    if (!selectedHorn) {
      return;
    }

    hornImage.src = selectedHorn.image;
    hornAudio.src = selectedHorn.sound;
  });

  volumeSlider.addEventListener('input', updateVolume);

  playButton.addEventListener('click', () => {
    if (!hornAudio.src) {
      return;
    }

    hornAudio.currentTime = 0;
    hornAudio.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });

  updateVolume();
}