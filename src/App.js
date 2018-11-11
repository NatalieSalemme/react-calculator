import React, { Component } from 'react';
import './App.css';
import ButtonsList from './ButtonsList';

class App extends Component {
  state = {
    blackBox: []
  }
  handleClick = (e) => {


      this.setState(prevState => ({
        blackBox: [prevState.blackBox, e]
      }));


  }
  onEvaluate = () => {
    let blackBox = eval(this.state.blackBox.join(''));
    console.log(blackBox);
    this.setState({
      blackBox
    });
  }
  onClear = () => {
    this.setState({
      blackBox: []
    });
  }
  render() {
    return (
      <div className="calculator-box" id="calculator display" name="display">

        <div className="display">
        <span id="display-number">
        {this.state.blackBox.length == 0 ? '0' : this.state.blackBox}
        </span>
        </div>
        <ButtonsList handleClick={this.handleClick}
        onEvaluate={this.onEvaluate}
        onClear={this.onClear}/>
</div>
    );
  }
}

export default App;
