
const msg = new SpeechSynthesisUtterance()

// Declared variables 
let voices = []
const voicesDropdown = $('[name="voice"]')
const options = $('[type="range"], [name="text"]')
const speakButton = $('#speak')
const stopButton = $('#stop')

msg.text = $('[name="text"]').value

