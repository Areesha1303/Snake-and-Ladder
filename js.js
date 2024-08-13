// vonstanats and variables

let direction = {x:0,y:0};
const foodSound = new Audio('/requirements/food.mp3');
const moveSound = new Audio('/requirements/move.mp3');
const GameOverSound = new Audio('/requirements/gameover.mp3');
const bgMusic = new Audio('/requirements/music.mp3');
let speed = 2;
let score = 0;
let lastPaintTime = 0;
let board = document.getElementById('board');
let snakeArr = [
    { x: 10, y: 10 },
    { x: 10, y: 11 },
    // Add more snake parts as needed
];
let food = { x: 5, y: 5 };



// game function
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
}
    lastPaintTime = ctime;
    gameEngine();
}

function gameEngine() {
    //update snake and food

    //display snake and food
    // board.innerHTML = ""; // Clear the board

// Render the snake
snakeArr.forEach((e, index) => {
    let snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;

    if (index === 0) {
        snakeElement.classList.add('head');
    } else {
        snakeElement.classList.add('snake');
    }

    board.appendChild(snakeElement);
});

    // Display the food
    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

}


// main logic
window.requestAnimationFrame(main);
'iput k'