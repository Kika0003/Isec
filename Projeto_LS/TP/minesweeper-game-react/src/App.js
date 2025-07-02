import React, { useState } from 'react';
import "./assets/App.css";
import icon from "./assets/icon.png";
import computer from "./assets/computer.png";
import bin from "./assets/bin.png"

import {
  Footer,
  Menu,
} from "./components";

export default function App() {

  const [showMain, setShowMain] = useState(true);
  const [minesweeperOpen, setMinesweeperOpen] = useState(false);

  

  const DoubleClick = () => {
    setShowMain(false);
    setMinesweeperOpen(!minesweeperOpen);
  };

  return (
    <div id="container">
      <button className='pc' >
        <img src={computer} alt="pc" id ="myComputer" />My computer
      </button>

       <button className='mina' onDoubleClick={DoubleClick}>
        <img src={icon} alt="mina" id ="icon" />Minesweeper
      </button>

      <button className='recycleBin'>
        <img src={bin} alt="bin" id ="recycleBinIcon" /> Recycle Bin
      </button>

      {!showMain && minesweeperOpen && 
        <Menu 
          onClose={() => setMinesweeperOpen(false)
          }
        />}
      <Footer isMinesweeperOpen={minesweeperOpen} />
    </div>
  );
}
