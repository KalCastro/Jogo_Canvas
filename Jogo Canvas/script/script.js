   const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");

// Variáveis do jogo
let cuboX = 50;
let cuboY = canvas.height - 50;
let cuboWidth = 50;
let cuboHeight = 50;
let cuboJumping = false;
let gravity = 2;
let jumpStrength = 150;
let groundHeight = 20;

let obstaculoX = canvas.width;
let obstaculoY = canvas.height - groundHeight - 50;
let obstaculoWidth = 20;
let obstaculoHeight = 50;
let obstaculoSpeed = 5;

let gameRunning = true; // Variável para controlar o estado do jogo
let score = 0; // Pontuação inicial

// exibir a pontuação
const scoreElement = document.getElementById("score");

// cenário de fundo
function drawBackground() {
 
  // Sol 
  ctx.fillStyle = "#FFD700"; // Cor do sol
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#30013b"; // Cor das montanha 1
  ctx.beginPath();
  ctx.moveTo(-100, 700);
  ctx.lineTo(50, 100);
  ctx.lineTo(150, 600);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#75038f"; // Cor das montanha 2
  ctx.beginPath();
  ctx.moveTo(150, 800);
  ctx.lineTo(50, 100);
  ctx.lineTo(200, 500);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#30013b"; // Cor das montanha 3
  ctx.beginPath();
  ctx.moveTo(100, 500);
  ctx.lineTo(150, 200);
  ctx.lineTo(250, 600);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#75038f"; // Cor das montanha 4
  ctx.beginPath();
  ctx.moveTo(150, 500);
  ctx.lineTo(150, 200);
  ctx.lineTo(300, 600);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#30013b"; // Cor das montanha 1 direita
  ctx.beginPath();
  ctx.moveTo(600, 800);
  ctx.lineTo(750, 100);
  ctx.lineTo(900, 600);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#75038f"; // Cor das montanha 2 direita
  ctx.beginPath();
  ctx.moveTo(500, 700);
  ctx.lineTo(750, 100);
  ctx.lineTo(650, 600);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#30013b"; // Cor das montanha 3 direita
  ctx.beginPath();
  ctx.moveTo(400, 700);
  ctx.lineTo(550, 250);
  ctx.lineTo(650, 600);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#75038f"; // Cor das montanha 3 direita
  ctx.beginPath();
  ctx.moveTo(400, 700);
  ctx.lineTo(550, 250);
  ctx.lineTo(550, 600);
  ctx.closePath();
  ctx.fill();

}

// Função para desenhar o cubo
function drawCubo() {
  ctx.fillStyle = "#5b0a91";
  ctx.fillRect(cuboX, cuboY, cuboWidth, cuboHeight);
}

// Função para desenhar o obstáculo
function drawObstaculo() {
  ctx.fillStyle = "#170129";
  ctx.fillRect(obstaculoX, obstaculoY, obstaculoWidth, obstaculoHeight);
}

// Função para verificar colisões
function checkCollision() {
  if (
    cuboX + cuboWidth > obstaculoX &&
    cuboX < obstaculoX + obstaculoWidth &&
    cuboY + cuboHeight > obstaculoY
    ) {
        // Colisão detectada, fim do jogo
        gameOver();
      }
}

// Função para atualizar a pontuação
function updateScore() {
  if (obstaculoX + obstaculoWidth < cuboX && obstaculoX + obstaculoWidth >= cuboX - obstaculoSpeed) {
    // Passou pelo obstáculo com sucesso, aumentar a pontuação em 1
    score++;
    scoreElement.textContent = score;
  }
}

// Função para reiniciar o jogo
function restartGame() {
  cuboX = 50;
  cuboY = canvas.height - 50;
  obstaculoX = canvas.width;
  cuboJumping = false;
  score = 0; // Reiniciar a pontuação
  scoreElement.textContent = score; // Atualizar a exibição da pontuação
  document.getElementById("restartButton").disabled = true;
  gameRunning = true;
}

// Função de fim de jogo
function gameOver() {
  gameRunning = false;
  document.getElementById("restartButton").disabled = false;
}

// Função de atualização do jogo
function update() {
  if (gameRunning) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenhar o cenário
    drawBackground();

    // Desenhar cubo
    drawCubo();

    // Desenhar obstáculo
    drawObstaculo();

    // Verificar colisão
    checkCollision();

    // Atualizar a pontuação
    updateScore();

    // atualizar a posição do obstáculo
    obstaculoX -= obstaculoSpeed;

    // verificar se o obstáculo saiu da tela e criar um novo
    if (obstaculoX + obstaculoWidth < 0) {
      obstaculoX = canvas.width;
    }

    // coloca gravidade no cubo se ele estiver no ar
    if (cuboY < canvas.height - cuboHeight - groundHeight) {
      cuboY += gravity;
    } else {
      cuboY = canvas.height - cuboHeight - groundHeight;
      cuboJumping = false;
    }
  }
}

// função para fazer o cubo pular
function jump() {
  if (!cuboJumping) {
    cuboJumping = true;
    cuboY -= jumpStrength;
  }
}

// evento de clique para fazer o cubo pular
document.addEventListener("keydown", function(event) {
  if (event.key === " " && gameRunning) { // Barra de espaço
    jump();
  }
});

// botão de reinício do jogo
document.getElementById("restartButton").addEventListener("click", function() {
  restartGame();
});

// loop principal do jogo
function gameLoop() {
  update();
  requestAnimationFrame(gameLoop);
}

// iniciar o jogo
gameLoop();
