import React from 'react';
import './App.css';
import Chatbox from './components/Chatbox';
import GameArea from './components/GameArea';
import Scoreboard from './components/Scoreboard';
import InfoText from './components/InfoText';

function App() {
  return (
    <div className="App">
      <header className="header">
        
      </header>

      <div className="layout-grid">
        <GameArea/>
        <Scoreboard/>
        <InfoText/>
        <Chatbox/>
      </div>
    </div>
  );
}

export default App;
