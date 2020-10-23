import React from 'react';
import styled from 'styled-components';

const StyledInfoText = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background: grey;
`;

function InfoText() {
  return (
    <StyledInfoText>
      Info Text
    </StyledInfoText>
  );
}

export default InfoText;
