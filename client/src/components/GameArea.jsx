import React from 'react';
import styled from 'styled-components';

const StyledGameArea = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background: grey;
`;

function GameArea() {
  return (
    <StyledGameArea>
      Game Area
    </StyledGameArea>
  );
}

export default GameArea;
