import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonsList from './ButtonsList';

class App extends Component {
  state = {
    blackBox: 2
  }
  handleClick = (e) => {
    this.setState(prevState => ({
      blackBox: [...prevState.blackBox, e.target.value]
    }));
  }
  render() {
    return (
      <div class="calculator-box" id="calculator" name="display" id="display">

        <div class="display">
        <span id="display-number">{this.state.blackBox}</span>
        </div>
        <ButtonsList />
</div>
    );
  }
}

export default App;
