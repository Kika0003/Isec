import React, { useState, useEffect, useCallback } from 'react';
import CreateBoard from '../util/GameUtil';
import Square from '../Square/Square.component';
import { revealed } from '../util/Reveal';

export const levels = [
  { rows: 9, cols: 9, mines: 10 },
  { rows: 16, cols: 16, mines: 40 },
  { rows: 16, cols: 30, mines: 99 }
];


function Board({ selectedLevel, updateRemainingMines, setGameFinished, gameFinished, minesRemaining, handleGameStatus }) {
    const [grid,setGrid]=useState([]); // Estado para armazenar o estado atual do tabuleiro do jogo
    const [nonMinecount,setNonMinecount]=useState(0); //armazena o num de celulas que nao sao minas
    const [mineLocation,setmineLocation]=useState([]); //armazena localizaçao das minas
    const [totalFlagsRemoved, setTotalFlagsRemoved] = useState(0); //armazena total bandeiras removidas

    
    const style={
        display : 'flex',
        flexDirection : 'row',
        width:'fit-content',
        color:'white',
    }

    //cria um novo tabuleiro do jogo com base no nivel 
    const freshBoard = useCallback((rows, cols, mines) => {
      const newBoard = CreateBoard(rows, cols, mines); //cria um novo tabuleiro com as dimensoes e minas
      setNonMinecount(rows * cols - mines); //atualiza o num celulas que ñ sao minas
      setmineLocation(newBoard.mineLocation); //atualiza localizacao minas
      setGrid(newBoard.board);
      setGameFinished(false);
  }, [setGameFinished]);


  useEffect(() => {
    const selectLevel = (levelIndex) => {
        const { rows, cols, mines } = levels[levelIndex];
        freshBoard(rows, cols, mines);
    };

    if (selectedLevel !== null) {
        selectLevel(selectedLevel); //seleciona o nivel de jogo se ñ for nulo
    }
}, [selectedLevel, freshBoard]);

    const revealcell = (x, y) => {
        
        //console.log(`revealcell called for (${x}, ${y})`);
        let newGrid = JSON.parse(JSON.stringify(grid));  // Cria uma cópia profunda do estado atual do tabuleiro
      
        if (newGrid[x][y].value === "X") {
          //console.log(`Bomb clicked at (${x}, ${y})`);
        // Se a célula clicada for uma bomba, revela todas as bombas e encerra o jogo
          for (let i = 0; i < mineLocation.length; i++) {
            newGrid[mineLocation[i][0]][mineLocation[i][1]].revealed = true;
          }
          setGrid(newGrid); //atualiza o tab com as bombas reveladas
          setGameFinished(true); 
          handleGameStatus(false); //chama funçao callback para indicar que acabou o jogo
        } else {
          let revealedboard = revealed(newGrid, x, y, nonMinecount);
      
          let flaggedAdjacentCells = 0;
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              const newX = x + i;
              const newY = y + j;
              if (newX >= 0 && newX < newGrid.length && newY >= 0 && newY < newGrid[0].length) {
                if (revealedboard.arr[newX][newY].revealed && revealedboard.arr[newX][newY].flagged) {
                  //console.log(`Flag removed from adjacent cell (${newX}, ${newY})`);
                // Se uma bandeira for removida de uma célula adjacente, atualiza o contador
                  revealedboard.arr[newX][newY].flagged = false;
                  flaggedAdjacentCells++;
                }
              }
            }
          }

          setGrid(revealedboard.arr);
          setNonMinecount(revealedboard.newNonMines);
      
          if (revealedboard.newNonMines === 0) {
            //se todas as celulas sem minas forem reveladas, acaba o jogo
            setGameFinished(true);
            handleGameStatus(true);
          }
          setTotalFlagsRemoved(totalFlagsRemoved + flaggedAdjacentCells); //atualiza cont de bandeiras removidas
          updateRemainingMines(flaggedAdjacentCells); //atualiza num de minas restantes
        }
      };

      
    return (
        <div className="parent">
            <div>
                {grid.map((singlerow,index1)=>{
                    return (
                        <div style={style} key={index1}>
                            {singlerow.map((singlecol,index2)=>{
                            return  <Square
                            details={singlecol}
                            key={index2}
                            revealcell={revealcell}
                            updateRemainingMines={updateRemainingMines} 
                            gameFinished={gameFinished}
                            minesRemaining={minesRemaining}
                            
                        />
                            })}
                            
                        </div>
                    )
                })}
            </div>
          
        </div>
    ) 
}
export default Board;
