const playBoard = document.querySelector(".play-area");

let foodX = 15, foodY = 20;

const changeFoodPoa = () => {
    //Passing a random 0 - 30 value as food position
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
    console.log(foodX, foodY);
}

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodX}/${foodY}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
changeFoodPoa();
initGame();