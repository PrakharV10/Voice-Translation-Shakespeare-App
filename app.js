// Getting all the IDs
const head = document.getElementById("header-id");
const heroHeading = document.getElementById("hero-heading-id");
const heroText = document.getElementById("hero-text-id");
const micBtn = document.getElementById("mic-box-id");
const micSub = document.getElementById("mic-sub-id");
const sect = document.getElementById("section-id");
const heroHeading2 = document.getElementById("hero-heading2-id");
const heroText2 = document.getElementById("hero-text2-id");
const ListenBtn = document.getElementById("hp-box-id");
const listenSub = document.getElementById("hp-sub-id");

// Getting ready for the Speech Recognition
const inputContent = document.querySelector("#input-content");
const outputContent = document.querySelector("#output-content");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// Speech Recognition Begins.
recognition.onstart = function(){
    console.log("clicked");
}

recognition.onresult = function(event){
    var index = event.resultIndex;
    const transcript = event.results[index][0].transcript;
    inputContent.textContent = transcript; 
}


var micClick = 0;
var listenClick = 0;


// Changing the UI of the screen
function changeClass () {
    head.className = "blackBg";
    heroHeading.className = "hero-heading";
    heroText.className = "hero-text";
    micBtn.className = "mic-box";
    micSub.className = "after-click";
    sect.className = "yellowBg";
    heroHeading2.className = "hero-heading2";
    heroText2.className = "hero-text2";
    ListenBtn.className = "headphone-box";
    listenSub.className = "after-click";
    
    micClick += 1;
}

// Adding function of Mic button click
if(micClick == 0){
    micBtn.addEventListener('click', function(){
        setTimeout(changeClass,500);
        recognition.start();
    });
}
else{
    micBtn.addEventListener('click', function(){
        recognition.start();
    });
}

// Adding function of speaker Button click
if(listenClick == 0){
    ListenBtn.addEventListener('click', function(){
        alert('Speak something first');
    });
}
