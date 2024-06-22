const playBoard = document.querySelector(".play-area");

let foodX, foodY;
let snakeX = 5, snakeY = 10;

const changeFoodPoa = () => {
    //Passing a random 0 - 30 value as food position
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
    console.log(foodX, foodY);
}

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodX}/${foodY}"></div>`;
    htmlMarkup += `<div class="snake" style="grid-area: ${snakeX}/${snakeY}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
changeFoodPoa();
initGame();