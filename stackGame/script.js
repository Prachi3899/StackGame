let canvas = document.getElementById("myCanvas")
let gameOvertext = document.querySelector('.gameOverText')
let scoreNumber = document.getElementById('scoreNumber')
let context = canvas.getContext("2d")

let scrollCounter, camerY, current, mode, xSpeed

let ySpeed = 5;
let height = 50;

let boxes = [];
boxes[0]={
    x:300,
    y:300,
    width:200,
}

let debris = {
    x:0,
    width:0
}

function newBox(){
    boxes[current]={
        x:0,
        y:(current + 10) * height,
        width:boxes[current - 1].width
    }
}
function gameOver(){
    // show game over text 
    gameOvertext.style.display = 'block'
    mode = 'gameOver'
}
function animate(){
    if(mode!= 'gameOver'){
        context.clearRect(0, 0, canvas.width, canvas.height)
        scoreNumber.innerHtml = current - 1

        for(let n=0; n<boxes.length;n++){
            let box = boxes[n]
            context.fillStyle = 'rgb(' + n * 16 +',' + n * 16 + ',' + n * 16 + ')';
            context.fillRect(box.x,600 - box,y+camerY, box.width, height)
        }

        context.fillStyle = 'yellow'
        context.fillRect(debris.x, 600 - debris.y + camerY, debris.width, height)    

        if(mode == 'bounce'){
            boxes[current].x = boxes[current].x + xSpeed;
            if(xSpeed>0 && boxes[current].x + boxes[current].width > canvas.width)
                xSpeed = -xSpeed
        }
    }
    window.requestAnimationFrame(animate)
}
function restart(){
    gameOvertext.style.display = 'none'
    boxes.splice(1, boxes.length - 1)
    mode = 'bounce'
    camerY = 0
    scrollCounter = 0
    xSpeed = 2
    current = 1
    newBox()
    debris.y=0
}

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

