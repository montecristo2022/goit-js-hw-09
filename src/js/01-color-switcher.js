

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector("body");
startButton.addEventListener('click', newColor);
stopButton.addEventListener('click', stopChangingColor);
let id = null;




function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function newColor() {
    id = setInterval(() => {

 body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    
    startButton.setAttribute('disabled', true)
}

function stopChangingColor() {
    startButton.removeAttribute('disabled')
    clearInterval(id)
}









