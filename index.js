const playBoard = document.querySelector(".play-area");

let foodX, foodY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let velocityX = 0, velocityY = 0;
let gameOver = false;
let setIntervalId;

const changeFoodPoa = () => {
    //Passing a random 0 - 30 value as food position
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
    console.log(foodX, foodY);
}

const handleGameOver = () => {
    //Clearing the timer and reloading the page on game over
    clearInterval(setIntervalId);
    alert("Game Over! Press Ok to Play");
    location.reload();
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
    if (gameOver) return handleGameOver();
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

    //Checking if snake's head is out of wall
    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        //Adding div for each part of snake body
        htmlMarkup += `<div class="snake" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]}"></div>`;
    }

    playBoard.innerHTML = htmlMarkup;
}
changeFoodPoa();
setIntervalId = setInterval(initGame, 125)

document.addEventListener("keydown", changeDirection);