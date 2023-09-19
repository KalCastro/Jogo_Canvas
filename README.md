# Jogo Canvas Cubo Pulador

Este é um jogo simples de plataforma feito em JavaScript onde um cubo deve pular obstáculos para evitar colisões. Abaixo, você encontrará uma visão geral das principais características e funcionalidades do jogo, juntamente com explicações sobre os códigos HTML, JavaScript e CSS fornecidos.

<IMG SRC="Jogo Canvas/imgs/fotoJogo.png">


## Visão Geral do Jogo

- O jogo consiste em um cubo que deve pular obstáculos para evitar colisões e acumular pontos.

- A pontuação é baseada no número de obstáculos que o cubo consegue superar.

- O jogador pode controlar o cubo pressionando a barra de espaço para fazê-lo pular.

- O jogo oferece uma opção de reinício para começar novamente após uma colisão.

## vídeo da execução do jogo

 https://github.com/KalCastro/Jogo_Canvas/assets/127865406/24ddde09-56c7-4837-b7a9-b0ec0c44aff0
 
## HTML

### Doctype e HTML Básico

- O arquivo HTML começa com o `<!DOCTYPE html>`, que define o tipo de documento HTML.

- A estrutura básica do HTML inclui as tags `<html>`, `<head>`, e `<body>`.

### Meta Charset e Título

- A tag `<meta charset="UTF-8">` define o conjunto de caracteres UTF-8 para garantir que o texto seja exibido corretamente.

- O `<title>` define o título da página, que neste caso é "Jogo Canvas".

### Favicon

- A tag `<link rel="icon" type="image/png" href="imgs/retro.png">` define o ícone (favicon) que será exibido na aba do navegador. O arquivo de ícone está localizado em "imgs/retro.png".

### Estilo CSS

- A tag `<link rel="stylesheet" type="text/css" href="css/style.css" />` vincula um arquivo CSS externo chamado "style.css" para aplicar estilos à página.

### Script JavaScript

- A tag `<script src="script/script.js" defer></script>` vincula um arquivo JavaScript externo chamado "script.js" e usa o atributo `defer` para garantir que o script seja executado após o carregamento da página.

### Corpo da Página

- O `<body>` da página contém o conteúdo visível para o usuário.

- Um título `<h1>` "Jogo Canvas" é exibido para indicar o nome do jogo.

- Um elemento `<canvas>` com o ID "Canvas" é usado para renderizar o jogo.

- Um botão com o ID "restartButton" é fornecido para permitir que o jogador reinicie o jogo.

- A pontuação do jogador é exibida como um parágrafo `<p>` com a etiqueta "Pontuação" e um valor atualizado é mostrado dentro de um `<span>` com o ID "score".

## JavaScript

### Variáveis do Jogo

- O jogo usa várias variáveis para controlar o estado do cubo, obstáculos e pontuação, como posição, tamanho, velocidade, gravidade, etc.

### Cenário de Fundo

- A função `drawBackground()` desenha o cenário de fundo com um sol e montanhas em diferentes cores.

### Desenho do Cubo

- A função `drawCubo()` é responsável por desenhar o cubo na tela.

### Desenho do Obstáculo

- A função `drawObstaculo()` desenha obstáculos na tela que o cubo deve evitar.

### Verificação de Colisão

- A função `checkCollision()` verifica se houve uma colisão entre o cubo e o obstáculo.

### Atualização da Pontuação

- A função `updateScore()` atualiza a pontuação do jogador sempre que o cubo passa com sucesso por um obstáculo.

### Reinício do Jogo

- A função `restartGame()` reinicia o jogo quando o jogador decide recomeçar.

### Fim de Jogo

- A função `gameOver()` é chamada quando uma colisão é detectada, encerrando o jogo.

### Atualização do Jogo

- A função `update()` é responsável por atualizar o estado do jogo, mover o cubo e obstáculos, verificar colisões e atualizar a pontuação.

### Controle de Salto

- O jogo permite que o jogador faça o cubo pular pressionando a barra de espaço.

### Loop Principal

- O jogo utiliza um loop principal (`gameLoop()`) para atualizar continuamente o jogo e manter a jogabilidade em execução.

## CSS

- O CSS define a aparência da página HTML do jogo, incluindo o fundo, o estilo do elemento canvas e os botões.

- O jogo usa gradientes lineares para criar um fundo colorido e atraente.

- O elemento canvas possui cantos arredondados e uma borda para enquadrar a área de jogo.

- Os botões do jogo também têm gradientes lineares e um estilo degradê para adicionar apelo visual.

### Estilo do Body

- O fundo do `body` da página é definido usando um gradiente linear que vai de cima para baixo, usando cores #5d048c e #ed05da. Isso cria um fundo atraente e colorido para a página.

- O texto é centralizado na página usando `text-align: center`.

- O `margin` e o `padding` são definidos como 0 para eliminar qualquer espaço indesejado ao redor do conteúdo.

- A altura do `body` é definida como `100vh` para preencher toda a altura da janela de visualização do navegador.

### Estilo do Elemento Canvas

- O elemento canvas com o ID "Canvas" recebe cantos arredondados usando as propriedades `border-top-left-radius`, `border-bottom-left-radius`, `border-top-right-radius` e `border-bottom-right-radius`.

- É adicionada uma borda preta com espessura de 2px ao redor do elemento canvas usando `border: 2px solid black`.

- O elemento canvas é centralizado na página horizontalmente usando `display: block` e `margin: 0 auto`.

### Estilo dos Botões

- Os botões no jogo (não mostrados no código CSS fornecido, mas presumivelmente definidos no HTML) têm um fundo colorido que utiliza um gradiente linear semelhante ao gradiente de fundo da página.

- Isso cria um estilo degradê atraente para os botões, usando cores #5d048c e #ca03fc.

## Personalização

- Você pode personalizar os elementos do jogo como as cores, tamanhos e velocidades do cubo, dos obstáculos e do cenário de fundo ajustando as variáveis no início do código.

- Personalize o cenário de fundo modificando as coordenadas das montanhas e as cores usadas na função `drawBackground()`.

## contribuidores

- Mariana Santiago (MariSantiago0)

- Kauã de Castro (KalCastro)

