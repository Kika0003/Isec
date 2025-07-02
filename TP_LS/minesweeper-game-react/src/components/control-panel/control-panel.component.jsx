import React, {useEffect, useState} from 'react';
import './control-panel.css';
import happy from "../../assets/default.png";

function ControlPanel({ minesRemaining, gameFinished, resetBoard, setElapsedTime, elapsedTime}) {

  const formattedMinesRemaining = formatMinesRemaining(minesRemaining); //garante que as menas sao sempre exibidas com 3 digitos
  const [isClicked, setIsClicked] = useState(false);

  // Faz o update do timer
  useEffect(() => {
    let intervalId;
    if (!gameFinished) {
        intervalId = setInterval(() => {
            setElapsedTime(prevTime => prevTime + 1);
        }, 1000);
    }
    return () => clearInterval(intervalId); // Cleanup on unmount or game finish
}, [gameFinished, setElapsedTime]);


  // Format the elapsed time as seconds with 3 digits
  const formatTime = (timeInSeconds) => {
    return timeInSeconds.toString().padStart(3, '0');
  };

  //lida com o reset do nivel
  const handleResetLevel = () => {
    resetBoard();
    setElapsedTime(0); // Reset the timer
    setIsClicked(!isClicked); //altera o estado do botao do rosto

    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  
  return (
    <section id="panel-control">
      <div className="left-mine">
        <span className='remain'>{formattedMinesRemaining}</span>
      </div>
        <div className={isClicked ? "face clicked" : "face"}>
        <button onClick={handleResetLevel}><img src={happy} alt="smiley" id ="default" /></button>
        </div>
        <div className="counter">
          <span className='timer'>{formatTime(elapsedTime)}</span>
        </div>
    </section>
  );
}

export default ControlPanel;


function formatMinesRemaining(minesRemaining) {
  // Ensure that minesRemaining is always displayed with three digits
  if (minesRemaining < 0) {
    return '000'; // If minesRemaining is negative, show '000'
  } else if (minesRemaining > 999) {
    return '999'; // If minesRemaining is greater than 999, show '999'
  } else {
    return minesRemaining.toString().padStart(3, '0'); // Pad with leading zeros if needed
  }
}