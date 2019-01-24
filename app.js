
const msg = new SpeechSynthesisUtterance()

// Declared variables 
let voices = []
const voicesDropdown = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type="range"], [name="text"]')
const speakButton = document.querySelector('#speak')
const stopButton = document.querySelector('#stop')

msg.text = document.querySelector('[name="text"]').value

function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
    //   .filter(voice => voice.lang.includes('en'))
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
  }

  function setVoice(){
     msg.voice = voices.find(voice => voice.name === this.value);
  }

  function toggle(){
      speechSynthesis.cancel();
      speechSynthesis.speak(msg)

  }

  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  voicesDropdown.addEventListener('change', setVoice);


