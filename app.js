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

// var url = "https://api.funtranslations.com/translate/yoda.json";
// var url = "https://api.funtranslations.com/translate/pirate.json";
var url = "https://api.funtranslations.com/translate/shakespeare.json";


function createURL(transcript){
    return url+ "?text=" + transcript;
}

function errorHandler(error){
    console.log(error);
    // console.log("error occured");
    // alert("An error has occured, Please try again later!");
    if(error.code == "429"){
        alert(error.message);
    }
    else{
        alert("An error has occured, Please try again later!");
    }

}

// Speech Recognition Begins.
recognition.onstart = function(){
    console.log("clicked");
}

recognition.onresult = function(event){
    var index = event.resultIndex;
    const transcript = event.results[index][0].transcript;
    inputContent.textContent = transcript;

    // readOutLoud(transcript); 

    fetch(createURL(transcript))
    .then(response => response.json())
    .then(json => {
        var outputText = json.contents.translated;
        outputContent.textContent =  outputText;
        
    })
    .catch(errorHandler);
    
    ListenBtn.addEventListener('click',function(){
        readOutLoud(outputContent.innerHTML);
    });
}




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
    
}

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}



// Adding function of Mic button click

micBtn.addEventListener('click', function(){
    setTimeout(changeClass,500);
    recognition.start();
});




