import React, { Component } from 'react';
import './App.css';
import ButtonsList from './ButtonsList';

class App extends Component {
  state = {
    blackBox: [],
    error: false
  }
  handleClick = (e) => {
    if(this.state.error) {
      console.log('there is an error');
    } else {
      if(e === 'x') {
        e = '*'
      } else if (e === '%') {
        e = '/';
      }

      if(this.state.blackBox < 1) {
        this.setState({
          blackBox: [e]
        });
      } else if (this.state.blackBox.length > 6) {
        this.setState({
          blackBox: ['ERROR'],
          error: true
        });
        console.log('over 6');
      } else {
        this.setState({
          blackBox: [...this.state.blackBox, e]
        });

      }
    }

  }
  onEvaluate = () => {
    let result = this.state.blackBox.join('');
    let evaluate = eval(result);
    if(this.state.blackBox.length > 5) {
      this.setState({
        blackBox: ['ERROR']
      });
    } else {
      this.setState({
        blackBox: [evaluate.toString()]
      });
    }

  }
  onAllClear = () => {
    this.setState({
      blackBox: [],
      error: false
    });
  }
  onClear = () => {
    let pop = this.state.blackBox.slice(0, this.state.blackBox.length - 1);
    this.setState({
      blackBox: pop,
      error: false
    });
  }
  handleDecimal = (e) => {
    if(this.state.blackBox.includes('.')
    && !this.state.blackBox.includes('*')
    && !this.state.blackBox.includes('/')
    && !this.state.blackBox.includes('+')
    && !this.state.blackBox.includes('-')) {
      console.log('already has decimal');
    } else if(this.state.blackBox.length === 0){
      this.setState({
        blackBox: ['0', '.']
      });
    } else {
      this.setState({
        blackBox: [...this.state.blackBox, e]
      });
    }

  }
  render() {
    let button = 'Buttons';
    return (
      <div className="calculator-box" id="calculator" name="display">

        <div id="display-container">
        <span id="display">
        {this.state.blackBox.length === 0 ? '0' : this.state.blackBox}
        </span>
        </div>
        <ButtonsList handleClick={this.handleClick}
        onEvaluate={this.onEvaluate}
        onAllClear={this.onAllClear}
        onClear={this.onClear}
        handleDecimal={this.handleDecimal}/>
</div>
    );
  }
}

export default App;
