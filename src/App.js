import React, { Component } from 'react';
import './App.css';
import ButtonsList from './ButtonsList';

class App extends Component {
  state = {
    blackBox: []
  }
  handleClick = (e) => {
    if(e == 'x') {
      e = '*'
    } else if (e == '%') {
      e = '/';
    }
    if(this.state.blackBox < 1) {
      this.setState({
        blackBox: [e]
      });
    } else {
      this.setState({
        blackBox: [...this.state.blackBox, e]
      });

    }
  }
  onEvaluate = () => {
    let result = this.state.blackBox.join('');
    let evaluate = eval(result);
    console.log(evaluate);
    this.setState({
      blackBox: [evaluate.toString()]
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
