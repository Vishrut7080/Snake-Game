const playBoard = document.querySelector(".play-area");

let foodX = 15, foodY = 20;

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodX}/${foodY}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
initGame();