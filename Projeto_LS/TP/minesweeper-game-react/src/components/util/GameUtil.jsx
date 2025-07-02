export default function CreateBoard(row, col, mines){
  let board = []; //matriz bidimensional
  let mineLocation = []; //

  //Cria um tabuleiro em branco
  for (let x = 0; x < row; x++) { //linhas
    let subCol = [];
    for (let y = 0; y < col; y++) { //colunas
      subCol.push({
        value: 0, //atualiza se tiver uma bomba
        revealed: false, //indica se a célula for revelada
        x: x, //coordenadas
        y: y,
        flagged: false, //se foi marcada com bandeira
      });
    }
    board.push(subCol);
  }

  // Põe bombas random!
  let minesCount = 0;
  while (minesCount < mines) { //até ter o nº de bombas por nivel
    let x = random(0, row - 1);
    let y = random(0, col - 1);

    // coloca numa posição random(x,y) on board[x][y]
    if (board[x][y].value === 0) {
      board[x][y].value = "X";
      mineLocation.push([x, y]); 
      minesCount++;
    }
  }

  // Adiciona os números
  for (let i = 0; i < row; i++) { //linhas
    for (let j = 0; j < col; j++) { //colunas
      if (board[i][j].value === "X") {
        continue;
      }

      //Para cada célula vazia, o código verifica todas as 8 posições adjacentes. 
      //Se uma posição adjacente contém uma bomba (value === "X"), o valor da célula atual é incrementado em 1.

      // Top
      if (i > 0 && board[i - 1][j].value === "X") {
        board[i][j].value++;
      }

      // Top Right
      if (
        i > 0 &&
        j < col - 1 &&
        board[i - 1][j + 1].value === "X"
      ) {
        board[i][j].value++;
      }

      // Right
      if (j < col - 1 && board[i][j + 1].value === "X") {
        board[i][j].value++;
      }

      // Botoom Right
      if (
        i < row - 1 &&
        j < col - 1 &&
        board[i + 1][j + 1].value === "X"
      ) {
        board[i][j].value++;
      }

      // Bottom
      if (i < row - 1 && board[i + 1][j].value === "X") {
        board[i][j].value++;
      }

      // Bottom Left
      if (
        i < row - 1 &&
        j > 0 &&
        board[i + 1][j - 1].value === "X"
      ) {
        board[i][j].value++;
      }

      // Left
      if (j > 0 && board[i][j - 1].value === "X") {
        board[i][j].value++;
      }

      // Top Left
      if (i > 0 && j > 0 && board[i - 1][j - 1].value === "X") {
        board[i][j].value++;
      }
    }
  }
  return { board, mineLocation }; 
  //retorna um objeto com o tabuleiro (board) e a localização das minas (mineLocation).
};

// coordenadas aleatórias
function random(min = 0, max) {
  // min e max 
  return Math.floor(Math.random() * (max - min + 1) + min);
}