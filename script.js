//Model
let app = document.getElementById('app');
let userInput = '';
let randomNumber = '';
let terjeInput = '';
let titel = 'Stein, Saks, Papir';
let rock = '✊';
let paper = '✋';
let scissor = '✌️';
let resultStatus = 0;
let terjeBilde = 'https://media.discordapp.net/attachments/902105235391143937/910853954794033152/terje_neutral.png';
let userBilde = 'https://cdn.betterttv.net/emote/5aa16eb65d4a424654d7e3e5/3x'

//View

show()
function show() {
    app.innerHTML = `
    <header>
        <h2>${titel}</h2>
        
    </header>
    <div class="image">
        <img style="width:256px" src="${terjeBilde}">
        <div>${terjeInput}</div>
    </div>
    <div class="buttons">
        <button onclick="handleClick(this)">✊</button>
        <button onclick="handleClick(this)">✋</button>
        <button onclick="handleClick(this)">✌️</button>
    </div>
    <div class="image">
        <img style="width:256px" src="${userBilde}">
        <div>${userInput}</div>
    </div>
    <h3>Lagd av team 4</h3>
    
    `;
}

//Controller
function handleClick(buttonClicked) {
    userInput = buttonClicked.innerText;
    terjeSelection();
    getResults();
    show();
}

function terjeSelection() {
    randomNumber = getRandomNumber(3);
    if (randomNumber == 0) {
        terjeInput = rock;
    }
    if (randomNumber == 1) {
        terjeInput = paper;
    }
    if (randomNumber == 2) {
        terjeInput = scissor;
    }
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}


function getResults() {
    getResultStatus()
    if (resultStatus == 1){
        titel = 'Du vant';
        terjeBilde = 'https://media.discordapp.net/attachments/902105235391143937/910853951975460904/terje_mad.png'
        userBilde = 'https://cdn.betterttv.net/emote/5590b223b344e2c42a9e28e3/3x'
    }
    if (resultStatus == 2){
        titel = 'Du tapte';
        terjeBilde = 'https://cdn.discordapp.com/attachments/902105235391143937/910853946313158676/terje_smile.png'
        userBilde = 'https://cdn.betterttv.net/emote/5a55e608a0e5fb2bd16458db/3x'
    }
    if (resultStatus == 3){
        titel = 'Det ble uavgjort';
        terjeBilde = 'https://media.discordapp.net/attachments/902105235391143937/910853954794033152/terje_neutral.png'
        userBilde = 'https://cdn.betterttv.net/emote/5aa16eb65d4a424654d7e3e5/3x'
    }
}

function getResultStatus() {
    if (terjeInput == userInput){
        resultStatus = 3;
    }
    if (terjeInput == rock && userInput == scissor){
        resultStatus = 2;
    }
    if (terjeInput == paper && userInput == rock){
        resultStatus = 2;
    }
    if (terjeInput == scissor && userInput == paper){
        resultStatus = 2;
    }
    if (terjeInput == rock && userInput == paper){
        resultStatus = 1;
    }
    if (terjeInput == paper && userInput == scissor){
        resultStatus = 1;
    }
    if (terjeInput == scissor && userInput == rock){
        resultStatus = 1;
    }  
}

/* function results(){
    if (terjeInput == userInput){
        result = 'Det ble uavgjort';
    }
    if (terjeInput == rock && userInput == scissor){
        result = 'Du tapte';
    }
    if (terjeInput == paper && userInput == rock){
        result = 'Du tapte';
    }
    if (terjeInput == scissor && userInput == paper){
        result = 'Du tapte';
    }
    if (terjeInput == rock && userInput == paper){
        result = 'Du vant';
    }
    if (terjeInput == paper && userInput == scissor){
        result = 'Du vant';
    }
    if (terjeInput == scissor && userInput == rock){
        result = 'Du vant';
    }  
}
*/