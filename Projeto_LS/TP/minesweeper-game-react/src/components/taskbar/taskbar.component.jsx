import React, { useState, useEffect } from 'react';
import start from "../../assets/start.png";
import "./taskbar.css"
import icon from "../../assets/icon.png"


export default function Taskbar({ isMinesweeperOpen }){
    
    const [currentTime, setCurrentTime] = useState(getCurrentTime()); //Estado armazena a hora atual

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(getCurrentTime());
      }, 1000); // Update every second
  
      return () => clearInterval(intervalId); // Clean up on unmount
    }, []);
  
    function getCurrentTime() {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const period = hour >= 12 ? 'PM' : 'AM';
      const formattedHour = hour % 12 || 12; // Convert to 12-hour format
      return `${formattedHour}:${minute < 10 ? '0' + minute : minute} ${period}`;
    }
  
  
  return(

<div className="taskbar">
  <button className="taskbar-icon">
    <img src={start} alt="start" />
  </button>
  {isMinesweeperOpen && (
  <button className="app">
    <img src={icon} alt="start" id="icon-mina"/>Minesweeper
  </button>
  )}
  <p>© 2 0 2 4 | Carolina Pimenta // 2015015938 | Carolina Veloso // 2021140780 | 2 0 2 4 © </p>

  <div className="system-clock">
    <span>{currentTime}</span>
  </div>
  
</div>


  );
}