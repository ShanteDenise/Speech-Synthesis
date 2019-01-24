
const msg = new SpeechSynthesisUtterance()

// Declared variables 
let voices = []
const voicesDropdown = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type="range"], [name="text"]')
const speakButton = document.querySelector('#speak')
const stopButton = document.querySelector('#stop')

msg.text = document.querySelector('[name="text"]').value

function populateVoices() {
    //Get voices from getVoices function built in 
    voices = this.getVoices();
    //Add voices to html
    voicesDropdown.innerHTML = voices
      .filter(voice => voice.lang.includes('en')) //Filter array of voices by language
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)//map through array of voices to only select name and voice language
      .join(''); 
  }

  function setVoice(){
     msg.voice = voices.find(voice => voice.name === this.value); //set selected voice to the name of that voice
  }

  function toggle(startOver = true){ //on toggle of the sliders call method cancel to stop the sound
      speechSynthesis.cancel()
      if(startOver){ //if not speak
      speechSynthesis.speak(msg)
      }
  }

  function setOption(){
      msg[this.name] = this.value //set name to call method toggle to get text to start talking
      toggle()
  }

  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  voicesDropdown.addEventListener('change', setVoice);
  options.forEach(option => option.addEventListener('change', setOption))
  speakButton.addEventListener('click', toggle)
  stopButton.addEventListener('click', () => toggle(false));


