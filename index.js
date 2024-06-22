const playBoard = document.querySelector(".play-area");

let foodX, foodY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
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
    //Checking if snake hits Food
    if (snakeX === foodX && snakeY === foodY) {
        changeFoodPoa();
        snakeBody.push([foodX, foodY]);//Pushing food in snake body
        console.log(snakeBody);
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        //Shifting forward the values of elements in snake body by one
        snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeX, snakeY];//Setting first element of snake body to current snake position
    //Updating snake head's position based on current velocity
    snakeX += velocityX;
    snakeY += velocityY;
    for (let i = 0; i < snakeBody.length; i++) {
        //Adding div for each part of snake body
        htmlMarkup += `<div class="snake" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]}"></div>`;
    }

    playBoard.innerHTML = htmlMarkup;
}
changeFoodPoa();
setInterval(initGame, 125)

document.addEventListener("keydown", changeDirection);