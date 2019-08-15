import React from 'react';
import Chatbox from './components/Chatbox';
import GameArea from './components/GameArea';
import Scoreboard from './components/Scoreboard';
import InfoText from './components/InfoText';
import styled from 'styled-components'

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 75fr 30fr;
  grid-template-rows: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
  border: 10px solid var(--yellow);
  margin: 50px;
  background-size: 340px, auto;
  min-height: calc(100vh - 100px);
  margin: 50px;
`

const LeftColumn = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 75% 25%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
`

const RightColumn = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
`

function App() {
  return (
    <div className="App">
      <header className="header">
        
      </header>

      <MainContainer>
        <LeftColumn>
          <GameArea/>
          <InfoText/>
        </LeftColumn>
        <RightColumn>
          <Scoreboard/>
          <Chatbox/>
        </RightColumn>
      </MainContainer>
    </div>
  );
}

export default App;
