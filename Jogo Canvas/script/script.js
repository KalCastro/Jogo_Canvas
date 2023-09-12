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

    // Elemento HTML para exibir a pontuação
    const scoreElement = document.getElementById("score");

    // cenário de fundo
   function drawBackground() {
 
    // Sol 
    ctx.fillStyle = "#FFD700"; // Cor do sol
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#75038f"; // Cor das montanha
    ctx.beginPath();
    ctx.moveTo(150, 800);
    ctx.lineTo(50, 100);
    ctx.lineTo(200, 500);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#30013b"; // Cor das montanha
    ctx.beginPath();
    ctx.moveTo(-100, 700);
    ctx.lineTo(50, 100);
    ctx.lineTo(150, 600);
    ctx.closePath();
    ctx.fill();

   }

    // Função para desenhar o cubo
    function drawCubo() {
      ctx.fillStyle = "green";
      ctx.fillRect(cuboX, cuboY, cuboWidth, cuboHeight);
    }

    // Função para desenhar o obstáculo
    function drawObstaculo() {
      ctx.fillStyle = "red";
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

        // Atualizar a posição do obstáculo
        obstaculoX -= obstaculoSpeed;

        // Verificar se o obstáculo saiu da tela e criar um novo
        if (obstaculoX + obstaculoWidth < 0) {
          obstaculoX = canvas.width;
        }

        // Aplicar gravidade ao cubo se ele estiver no ar
        if (cuboY < canvas.height - cuboHeight - groundHeight) {
          cuboY += gravity;
        } else {
          cuboY = canvas.height - cuboHeight - groundHeight;
          cuboJumping = false;
        }
      }
    }

    // Função para fazer o cubo pular
    function jump() {
      if (!cuboJumping) {
        cuboJumping = true;
        cuboY -= jumpStrength;
      }
    }

    // Evento de clique para fazer o cubo pular
    document.addEventListener("keydown", function(event) {
      if (event.key === " " && gameRunning) { // Barra de espaço
        jump();
      }
    });

    // Botão de reinício do jogo
    document.getElementById("restartButton").addEventListener("click", function() {
      restartGame();
    });

    // Loop principal do jogo
    function gameLoop() {
      update();
      requestAnimationFrame(gameLoop);
    }

    // Iniciar o jogo
    gameLoop();