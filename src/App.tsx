
import React from 'react';
import { useState } from 'react';

import './App.css';
import StringC from './components/StringC'
import Tuning from './components/Tuning'

import myImage from './images/fretboard.png';


function App() {

  const [tuningArr, setTuningArr] = useState<number[]>([4, 11, 7, 2, 9, 4]);

  //receives the tuning array from tuning component
  const handleTuningClick = (tuning: number[]) => {
    setTuningArr(tuning);
  };
  //receives the note clicked from string componenet
  const handleNoteClick = (note: string) => {
    console.log(note);
  };

  return (
    <div className="body">
      <div className="final-chord">
        GUITAR CHORD FINDER
      </div>
      <div className="tuning-grid">
        <Tuning 
          onClick={(tuning: number[])=>handleTuningClick(tuning)} 
          tuningID={0}
        />
        <Tuning 
          onClick={(tuning: number[])=>handleTuningClick(tuning)} 
          tuningID={1}
        />
        <Tuning 
          onClick={(tuning: number[])=>handleTuningClick(tuning)} 
          tuningID={2}
        />
      </div>
      <div className="fretBoardContainer">
        <img className="fretImage" src={myImage} alt="Image" />
        <div className="string-grid">
          <StringC 
            tuningShift={tuningArr[0]}
            onClick={(note: string)=>handleNoteClick(note)} 
          />
          <StringC 
            tuningShift={tuningArr[1]}  
            onClick={(note: string)=>handleNoteClick(note)} 
          />
          <StringC 
            tuningShift={tuningArr[2]}  
            onClick={(note: string)=>handleNoteClick(note)} 
          />
          <StringC 
            tuningShift={tuningArr[3]} 
            onClick={(note: string)=>handleNoteClick(note)} 
          />
          <StringC 
            tuningShift={tuningArr[4]}  
            onClick={(note: string)=>handleNoteClick(note)} 
          />
          <StringC 
            tuningShift={tuningArr[5]}  
            onClick={(note: string)=>handleNoteClick(note)} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
