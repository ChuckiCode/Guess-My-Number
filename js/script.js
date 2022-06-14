'use strict'; 
//  This project is coded by chuckiCODE as javaScript challenge and I have addes css and made it responsive 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  Getting elements from documents 
//  Declaring varibles

var secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let scoreElement = document.querySelector('.scoreElement');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let highScoreElement = document.querySelector('.highScoreElement');
let guess = Number(document.querySelector('.guess').value);
let gameSwitch = true;
// console.log(secretNumber)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - FUNCTIONS FOR THE EVENTLISTENER 

const winFunction = function (){
                                    message.textContent = 'Well done..'; 
                                    document.body.style.backgroundColor= 'green';
                                    number.style.width = '30rem';
                                    number.textContent = secretNumber;
                                    score >= Number(highScoreElement.textContent) ? highScoreElement.textContent = score: highScoreElement.textContent = 0;
}

const gameOverFunction = function (){
                                    message.textContent = 'Game over!!';
                                    // scoreElement.textContent = score;
                                    document.body.style.backgroundColor = 'rgb(141, 0, 0)';
                                    document.querySelector('.again').style.backgroundColor = 'green';
                                    number.textContent = secretNumber;
                                    document.querySelector('.check').classList.add('.hide');
                                    guess = '';
                                    highScoreElement.textContent = 0;
                                
}

const tryAgainFunction = function(){
                                    document.body.style.backgroundColor= '#222';
                                    number.style.width= '15rem';
                                    secretNumber = Math.trunc(Math.random() * 20) + 1;
                                    message.textContent = 'Start guessing...';
                                    number.textContent= '?';
                                    scoreElement.textContent = 20;
                                    score = 20;    
                                        
                                    if(scoreElement > highScoreElement){
                                            highScoreElement = scoreElement;
}
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  Event for the game 

document.querySelector('.check').addEventListener('click', function(){

    if(gameSwitch === true){
            
        guess = Number(document.querySelector('.guess').value);
            
            if(secretNumber === guess && gameSwitch === true){
                gameSwitch = false;
                winFunction();
            } else { 
                ( guess >= secretNumber) ? message.textContent = 'to high...' : message.textContent = 'too low ...';
                score--;
                scoreElement.textContent = score;
                if(score === 0){
                gameSwitch = false;
                gameOverFunction();
            }}};
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  Event on the again button 

document.querySelector('.again').addEventListener('click', function(){
    gameSwitch = true;
    tryAgainFunction();
});