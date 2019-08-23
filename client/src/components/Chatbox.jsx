import React, { Component } from 'react';
import styled from 'styled-components'
import { withFirebase } from './Firebase'


const StyledChatbox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background: grey;
`

class Chatbox extends Component {
  render() {
    return (
    <StyledChatbox/>      
    )
  }
}

export default withFirebase(Chatbox);
