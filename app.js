const btn = document.querySelector(".mic-div");
const content = document.querySelector(".content");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// recognition.onstart = function(){
//     console.log("Speech recognition is on.Speak Something");
// }

recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;

    content.textContent = transcript;
    // console.log("ended");
}

btn.addEventListener('click', ()=>{
    recognition.start();
    // console.log("Clicked");
})