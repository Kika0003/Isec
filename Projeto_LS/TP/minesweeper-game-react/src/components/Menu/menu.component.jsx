import React, {useState, useEffect, useMemo, useCallback} from 'react';
import "./menu.css";
import icon from "../../assets/icon.png"

import {
  ControlPanel,
  Game,
  GameOver
} from "../../components";

import {levels} from "../Board/board.component";

// Componente do menu do Minesweeper que controla o jogo e exibe as opções do menu
function Menu({ onClose }) {

  const [selectedLevel, setSelectedLevel] = useState(null); //armazena nivel
  const [minesRemaining, setMinesRemaining] = useState(0); //num minas restantes
  const [showGameMenu, setShowGameMenu] = useState(false); //controla exibiçao do menu
  const [isClicked, setIsClicked] = useState(false); 
  const [resetKey, setResetKey] = useState(0); //estado paea redefinir a chave e acionar a renderizaçao
  const [gameFinished, setGameFinished] = useState(false); //controla fim do jogo
  const [showGameStatsPopup, setShowGameStatsPopup] = useState(false); //janelas pop-up
  const [elapsedTime, setElapsedTime] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  
  const minesByLevel = useMemo(() => levels.map(level => level.mines), []); //memoriza o num de minas por nivel


  const handleGameStatus = (status) => { //atualiza status do jogo
    setGameWon(status);
};

  const selectLevel = (levelIndex) => { //seleciona nivel de dificuldade
    setSelectedLevel(levelIndex);
    setShowGameMenu(false); // Hide the game menu when a level is selected
  };

  const exit = () => {
    onClose(); // Close the Minesweeper menu
  };

  const updateRemainingMines = (increment) => { //atualiza o num de minas restantes
    setMinesRemaining(prevMinesRemaining => prevMinesRemaining + increment);
  };

  const resetBoard = useCallback(() => {
    setResetKey(prevKey => prevKey + 1); // Change the key to trigger re-render
    setGameFinished(false);
    setMinesRemaining(minesByLevel[selectedLevel]);
  }, [minesByLevel, selectedLevel]);

  
  const getLevelClass = (level) => { //obter classe do nivel com base no indice
    switch (level) {
      case 1:
        return 'intermediate';
      case 2:
        return 'expert';
      default:
        return '';
    }
  };

  const handleResetLevel = () => { //redifine nivel jogo
    resetBoard();
    setElapsedTime(0); // Reset the timer
    setShowGameStatsPopup(false);
  };

  const toggleGameStatsPopup = useCallback(() => {
    setShowGameStatsPopup(prevState => !prevState);
  }, []);

  
useEffect(() => {
  // Set the number of mines based on the selected level
  if (selectedLevel !== null) {
    setMinesRemaining(minesByLevel[selectedLevel]);
    resetBoard(); // Reset the board whenever the level changes
    setElapsedTime(0); // Reset the timer
  }
}, [selectedLevel, minesByLevel, resetBoard]);


useEffect(() => {
  if (gameFinished) {
    setShowGameStatsPopup(true); // Show the game stats popup
  }
}, [gameFinished]);

  return (
    <div className={`minesweeper-menu ${getLevelClass(selectedLevel)}`}>
      <div className="top-bar">
        <span className="title"> <img src={icon} alt="start" id="icon1"/>Minesweeper</span>
        <button className="exit-button" onClick={exit}>X</button>
      </div>
      <div className='sub'>
        <div className='dropdown'>
        <span className={isClicked ? "dropdown-btn clicked" : "dropdown-btn"} 
        onClick={() => {setShowGameMenu(!showGameMenu); setIsClicked(!isClicked);}}>Game</span>
          {showGameMenu && (
            <div className="dropdown-content">
              <button onClick={handleResetLevel}>New</button>
              <button onClick={() => {selectLevel(0)}}>Begginer</button>
              <button onClick={() => {selectLevel(1)}}>Intermediate</button>
              <button onClick={() => {selectLevel(2)}}>Expert</button>
              <button onClick={exit}>Exit</button>
            </div>
          )}
      </div>
        <span>Help</span>
      </div>
      <div className="button">
        {selectedLevel === null ? (
          <>
            <button id="lvl" onClick={() => {selectLevel(0)}}>Begginer</button>
            <button id="lvl" onClick={() => {selectLevel(1)}}>Intermediate</button>
            <button id="lvl" onClick={() => {selectLevel(2)}}>Expert</button>
          </>
       ) : (
        <div className={`content ${getLevelClass(selectedLevel)}`}>
          <ControlPanel 
          minesRemaining={minesRemaining} 
          resetBoard={resetBoard}
          gameFinished={gameFinished}
          setElapsedTime={setElapsedTime}
          elapsedTime={elapsedTime}
          gameWon={gameWon}/>

          <Game 
          key={resetKey} 
          selectedLevel={selectedLevel} 
          updateRemainingMines={updateRemainingMines} 
          setGameFinished={setGameFinished}
          gameFinished={gameFinished}
          minesRemaining={minesRemaining}
          handleGameStatus={handleGameStatus}/>
        </div>
      )}
      {showGameStatsPopup && (
                <GameOver
                    elapsedTime={elapsedTime} // Pass the elapsed time from your state
                    selectedLevel={selectedLevel} // Pass the selected level
                    totalMines={levels[selectedLevel].mines}
                    onClose={toggleGameStatsPopup}
                    gameWon={gameWon}
                />
            )}
      </div>
    </div>
  );
};

export default Menu;
