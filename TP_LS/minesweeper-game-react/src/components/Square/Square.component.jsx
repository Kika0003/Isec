import React, { useState} from 'react';
import flagImage from './flag.png';
import bombImage from './bomb.png';
import questionMarkImage from './questionmark.gif';
import './square.css'; 

export default function Square({ details, revealcell, updateRemainingMines, gameFinished, minesRemaining }) {

  const [markedType, setMarkedType] = useState(null);  // Estado para controlar o tipo de marcação (bandeira, ponto de interrogação)
  const [clicked, setClicked] = useState(false); //verifica se quadrado foi clicado


  const getColorClass = (value) => {
      switch (value) {
          case 1: return 'blue';
          case 2: return 'green';
          case 3: return 'red';
          case 4: return 'navy';
          case 5: return 'maroon';
          case 6: return 'teal';
          case 7: return 'black';
          case 8: return 'gray';
          default: return 'black';
      }
  };

  const click = () => {
    if (!details.revealed && !markedType && !gameFinished) {
        setClicked(true);  // Set the cell as clicked
        revealcell(details.x, details.y); // Pass x and y coordinates to revealcell function
    }
};

const rightClick = (e) => {
    e.preventDefault();
    if (!details.revealed && !gameFinished) {
        let newType = null;
        if (!markedType && minesRemaining > 0) {
            newType = 'flag';
            updateRemainingMines(-1); // Decrement minesRemaining when flag is placed
            console.log(`Flag placed at (${details.x}, ${details.y})`);
        } else if (markedType === 'flag') {
            newType = 'questionMark';
            updateRemainingMines(1); // Increment minesRemaining when flag is removed
            console.log(`Flag removed from (${details.x}, ${details.y})`);
        } else if (markedType === 'questionMark') {
            newType = null;
        }
        setMarkedType(newType);
        details.flagged = newType === 'flag'; // Update flagged state
    }
};


  return (
    <div 
        className={`cell ${details.revealed ? 'revealed' : 'unrevealed'} ${details.value === "X" && clicked ? 'clickedBomb' : ''}`} 
        onClick={click} 
        onContextMenu={rightClick}
    >
{/* Teste das bombas
{!details.revealed && details.value === "X" && ( 
<img src={bombImage} alt="Bomb" style={{ width: '100%', height: '100%' }} /> )} */} 

        {!details.revealed && markedType === 'flag' ? (
            <img src={flagImage} alt="Flag" style={{ width: '100%', height: '100%' }} />
        ) : details.revealed && details.value !== 0 ? (
            details.value === "X" ? (
                <img src={bombImage} alt="Bomb" style={{ width: '100%', height: '100%' }} />
            ) : (
                <span className={getColorClass(details.value)}>{details.value}</span>
            )
        ) : markedType === 'questionMark' ? (
            <img src={questionMarkImage} alt="Question Mark" style={{ width: '120%', height: '120%' }} />
        ) : null}
    </div>
  );
}
