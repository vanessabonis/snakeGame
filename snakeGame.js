const gameboard = document.getElementById('game-board');

const SNAKE_SPEED = 5;
var lastTimeRender = 0;

//currentTime -> milliseconds
function main(currentTime){

    window.requestAnimationFrame(main) 
    const secondsSinceLastRender = (currentTime = lastTimeRender)/1000

    //velocidade da cobra
    if(secondsSinceLastRender < 1/SNAKE_SPEED) return;
    lastTimeRender = currentTime;
    update();
    draw();

}

function update(){

}

function draw(){

}

window.requestAnimationFrame(main) 