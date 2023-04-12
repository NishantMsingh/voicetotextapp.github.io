const textArea = document.getElementById('text-area');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
let recognition = new webkitSpeechRecognition();

recognition.lang = 'en-US';

startButton.addEventListener('click', () => {
  recognition.start();
});

stopButton.addEventListener('click', () => {
  recognition.stop();
});

recognition.onresult = function(event) {
  const result = event.results[0][0].transcript;
  textArea.value += result + ' ';
}

