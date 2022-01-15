const character = document.getElementById('character');
const obstacle = document.getElementById('obstacle');
const jumpButton = document.querySelector('.jump-btn');
const cloud1 = document.getElementById('cloud1');
const cloud2 = document.getElementById('cloud2');
const gameOverLay = document.querySelector('.game-over');
const playAgainButton = document.querySelector('.playagain-btn');

function startGame() {
    obstacle.classList.add('move');
    cloud1.classList.add('cloud1-animated');
    cloud2.classList.add('cloud2-animated');
    gameOverLay.classList.remove('active');
    
}

function stopGame() {
    obstacle.classList.remove('move');
    cloud1.classList.remove('cloud1-animated');
    cloud2.classList.remove('cloud2-animated');
    gameOverLay.classList.add('active');
}

function checkForCollisions() {
    setInterval(() => {
        let obstaclePositions = obstacle.getBoundingClientRect();
        let characterPositions = character.getBoundingClientRect();
        let rightOverlap = (characterPositions.right >= obstaclePositions.left && characterPositions.right <= obstaclePositions.right);
        let bottomOverlap = (characterPositions.bottom >= obstaclePositions.top);
        if (rightOverlap && bottomOverlap) {
            stopGame();
        } 
    }, 10)
};

function vikingJump() {
    character.classList.add('jump')
    setTimeout(() => {
        character.classList.remove('jump')
    }, 700)
}

checkForCollisions();
startGame();

jumpButton.addEventListener('click', () => {
    vikingJump();
})

playAgainButton.addEventListener('click', () => {
    startGame();
})