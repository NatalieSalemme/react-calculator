import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonsList from './ButtonsList';

class App extends Component {
  state = {
    blackBox: [2]
  }
  handleClick = (e) => {
    this.setState(prevState => ({
      blackBox: [prevState.blackBox, e]
    }));
  }
  render() {
    return (
      <div className="calculator-box" id="calculator display" name="display">

        <div className="display">
        <span id="display-number">{this.state.blackBox}</span>
        </div>
        <ButtonsList handleClick={this.handleClick}/>
</div>
    );
  }
}

export default App;
