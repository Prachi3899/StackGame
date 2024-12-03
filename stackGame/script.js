let canvas = document.getElementById("myCanvas")
let gameOvertext = document.querySelector('.gameOverText')
let scoreNumber = document.getElementById('scoreNumber')
let context = canvas.getContext("2d")

let scrollCounter, camerY, current, mode, xSpeed

let ySpeed = 5;
let height = 50;

let boxed = [];
boxes[0]={
    x:300,
    y:300,
    width:200,
}

let debris = {
    x:0,
    width:0
}

function newbox(){}
function gameOver(){}
function animate(){}
function restart(){}

canvas.onpointerdown = function(e){
    if(mode == 'gameOver'){
        restart()
    }
    else{
        if(mode =='bounce'){
            mode = 'fall'
        }
    }
}

