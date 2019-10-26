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
  constructor(props) {
    super(props)
    this.state = { 
      dbKey: '',
      dbValue: '',
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.keyInputChanged = this.keyInputChanged.bind(this);
    this.valueInputChanged = this.valueInputChanged.bind(this);
  }

  keyInputChanged(event) {
    this.setState({dbKey: event.target.value});
  }

  valueInputChanged(event) {
    this.setState({dbValue: event.target.value});
  }

  clickHandler() {
    const { firebase } = this.props; 
    const { dbKey, dbValue } = this.state;

    const testChild = firebase.test().child("testChild");

    testChild.set({
      [dbKey]: dbValue,
    })
  }

  render() {
    return (
    <StyledChatbox>
      <input placeholder="key" type="text" value={this.state.dbKey} onChange={this.keyInputChanged}></input>
      <input placeholder="value" type="text" value={this.state.dbValue} onChange={this.valueInputChanged}></input>
      <button onClick={this.clickHandler}>Click Me!</button>
    </StyledChatbox>
    )
  }
}

export default withFirebase(Chatbox);
