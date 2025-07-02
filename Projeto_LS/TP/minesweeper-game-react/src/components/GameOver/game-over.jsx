import React from 'react';
import "./game-over.css";

function GameOver({ elapsedTime, selectedLevel, totalMines, gameWon, onClose }) {

    const exit = () => {
        onClose(); 
      };

    // Função para obter o nome do nível com base no índice
      const getLevelName = (levelIndex) => {
        const levelNames = ["Beginner", "Intermediate", "Expert"];
        return levelNames[levelIndex] || "Unknown";
    };

    return (
    <div className="popup">
     <div className="top">
        <span className="title">Game Over</span>
        <button className="exit-button" onClick={exit}>X</button>
      </div>
      <div className="info">
        <div className="status">
          <h1>{gameWon ? "Ganhaste!" : "Perdeste!"}</h1>
        </div>
        <span>Tempo: {elapsedTime} seg</span>
        <span>Nível: {getLevelName(selectedLevel)}</span>
        <span>Total Minas: {totalMines}</span>

        <div className="ok">
        <button onClick={exit} className="ok1">Ok</button>
      </div>
      </div>
    </div>
    );
}

export default GameOver;
