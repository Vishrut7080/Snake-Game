const playBoard = document.querySelector(".play-area");

let foodX, foodY;
let snakeX = 5, snakeY = 10;
let velocityX = 0, velocityY = 0;

const changeFoodPoa = () => {
    //Passing a random 0 - 30 value as food position
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
    console.log(foodX, foodY);
}

const changeDirection = (e) => {
    // console.log(e)
    //Changing velocity values based on key press
    if (e.key === "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    } else if (e.key === "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
    }
    if (e.key === "`") {
        velocityX = 0;
        velocityY = 0;
    }
}

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY}/${foodX}"></div>`;
    if (snakeX === foodX && snakeY === foodY) {
        changeFoodPoa();
    }
    //Updating snake head's position based on current velocity
    snakeX += velocityX;
    snakeY += velocityY;
    htmlMarkup += `<div class="snake" style="grid-area: ${snakeY}/${snakeX}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
changeFoodPoa();
setInterval(initGame, 125)

document.addEventListener("keydown", changeDirection);