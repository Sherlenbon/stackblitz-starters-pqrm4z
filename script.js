let isGameRunning = false;
let score = 0;
let isJumping = false;
let doubleJump = false;
let gameLoop;

const startButton = document.getElementById('startButton');
const character = document.getElementById('character');
const scoreDisplay = document.getElementById('score');
const groundObstacle = document.getElementById('groundObstacle');
const flyingObstacle = document.getElementById('flyingObstacle');
const higherFlyingObstacle = document.getElementById('higherFlyingObstacle');

let groundObstaclePassed = false;
let flyingObstaclePassed = false;
let higherFlyingObstaclePassed = false;

startButton.addEventListener('click', startGame);

function startGame() {
  if (isGameRunning) return;
  isGameRunning = true;
  score = 0;
  scoreDisplay.innerText = `Score: ${score}`;
  startButton.style.display = 'none';

  groundObstaclePassed = false;
  flyingObstaclePassed = false;
  higherFlyingObstaclePassed = false;

  groundObstacle.style.animation = 'moveObstacle 4s linear infinite';
  flyingObstacle.style.animation = 'moveObstacle 6s linear infinite';
  higherFlyingObstacle.style.animation = 'moveObstacle 8s linear infinite';

  gameLoop = setInterval(() => {
    checkCollisions();
    updateScore();
  }, 100);
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowUp') {
    if (!isJumping) {
      isJumping = true;
      character.style.animation = 'jump 1s ease';
      setTimeout(()
