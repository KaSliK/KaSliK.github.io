const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 500;
const cw = canvas.width;
const ch = canvas.height;
const ballSize = 20;
let ballX
let ballY
let playerY
let aiY
let ballSpeedX
let ballSpeedY
const paddleHeight = 100;
const paddleWidth = 20
const playerX = 70;
const aiX = cw - 90;
const lineWidth = 6;
const lineHeight = 16;
let level=0


let gameRender = setInterval(game, 1000 / 60);




function startGame() {
   document.getElementById('currentLevel').innerHTML
   = "Current level: "+(level+1);
   setStartState()
   gameRender = setInterval(game, 1000 / 60);
}
function nextLevel() {
   level++;
   startGame();
}
function setStartState() {
   clearInterval(gameRender)
   playerY = 200;
   aiY = 200;
   ballSpeedX = 2+level*3;
   ballSpeedY = 2+level*3;
   ballX = cw / 2 - ballSize / 2;
   ballY = ch / 2 - ballSize / 2;

   canvas.addEventListener("mousemove", playerPosition)
   game()
}

function player() {
   ctx.fillStyle = '#7FFF00';
   ctx.fillRect(playerX, playerY, paddleWidth, paddleHeight)
}

function ai() {
   ctx.fillStyle = 'yellow';
   ctx.fillRect(aiX, aiY, paddleWidth, paddleHeight)
}

function ball() {
   ctx.fillStyle = '#ffffff';
   ctx.fillRect(
      ballX,
      ballY,
      ballSize,
      ballSize)

   ballX += ballSpeedX;
   ballY += ballSpeedY;

   if (ballY <= 0 || ballY + ballSize >= ch) {
      ballSpeedY = -ballSpeedY
      speedUp()
   }
   if (ballX <= 0) {
      alert("Wygrał komputer");
      setStartState()
   } else if (ballX + ballSize > cw) {
      setStartState()
      alert("Wygrałeś!!!");
   }

   if ((ballX <= playerX + paddleWidth) && (ballY + ballSize / 2 >= playerY) && (ballY + ballSize / 2 <= playerY + paddleHeight)) {
      ballX += 5;
      ballSpeedX = -ballSpeedX;
      speedUp();
   }

   // Odbicia piłki od paletki AI
   if ((ballX + ballSize >= aiX) && (ballY + ballSize / 2 >= aiY) && (ballY + ballSize / 2 <= aiY + paddleHeight)) {
      ballX -= 5;
      ballSpeedX = -ballSpeedX;
      speedUp();
   }
}
function table() {
   ctx.fillStyle = '#000';
   ctx.fillRect(0, 0, cw, ch);

   for (let linePosition = 20; linePosition < ch; linePosition += 30) {
      ctx.fillStyle = 'gray';
      ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight)
   }
}

topCanvas = canvas.offsetTop;

function playerPosition(e) {
   playerY = e.clientY - topCanvas - paddleHeight / 2;

   if (playerY >= ch - paddleHeight) {
      playerY = ch - paddleHeight
   } else if (playerY <= 0) {
      playerY = 0;
   }


}
function speedUp() {
   if (ballSpeedX > 0 && ballSpeedX < 16) {
      ballSpeedX += .4;
   } else if (ballSpeedX < 0 && ballSpeedX > -16) {
      ballSpeedX -= .4;
   }

   if (ballSpeedY > 0 && ballSpeedY < 16) {
      ballSpeedY += .3;
   } else if (ballSpeedY < 0 && ballSpeedY > -16) {
      ballSpeedY -= .3;
   }
}



function aiPosition() {

   let middlePaddle = aiY + paddleHeight / 2;
   let middleBall = ballY + ballSize / 2;
   if (ballX > 500) {
      if (middlePaddle - middleBall > 200) {
         aiY -= 15

      } else if (middlePaddle - middleBall > 50) {
         aiY -= 5;

      } else if (middlePaddle - middleBall < -200) {
         aiY += 15

      } else if (middlePaddle - middleBall < -50) {

         aiY += 5
      }

   } else if (ballX <= 500 && ballX > 150) {
      if (middlePaddle - middleBall > 100) {
         aiY -= 3;
      } else if (middlePaddle - middleBall < -100) {
         aiY += 3;
      }

   }
}
function game() {
   table();
   ball();
   player();
   ai();
   aiPosition();
}