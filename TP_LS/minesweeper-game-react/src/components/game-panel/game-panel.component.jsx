import React from 'react';
import "./game.css";
import {
    Board,
} from "../index";

export default function Game({ selectedLevel, updateRemainingMines, setGameFinished, gameFinished, minesRemaining, handleGameStatus }) {
    return (
        <div className="game-container">
           <Board 
            selectedLevel={selectedLevel}
            updateRemainingMines={updateRemainingMines}
            setGameFinished={setGameFinished}
            gameFinished={gameFinished}
            minesRemaining={minesRemaining}
            handleGameStatus={handleGameStatus}
            />
        </div>
    );
}

