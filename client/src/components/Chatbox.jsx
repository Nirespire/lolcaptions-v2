import React from 'react';
import styled from 'styled-components'


const StyledChatbox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background: grey;
`

function Chatbox() {
  return (
    <StyledChatbox>
      Chatbox
    </StyledChatbox>
  );
}

export default Chatbox;
