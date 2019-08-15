import React from 'react';
import styled from 'styled-components'


const StyledScopeboard = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background: grey;
`

function Scoreboard() {
  return (
    <StyledScopeboard>
      Scoreboard
    </StyledScopeboard>
  );
}

export default Scoreboard;
