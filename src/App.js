import React, { Component } from 'react';
import './App.css';
import ButtonsList from './ButtonsList';
import Footer from './Footer';

class App extends Component {
  state = {
    blackBox: [],
    error: false,
    errorMessage: ''
  };
  handleClick = e => {
    if (this.state.error) {
      console.error('there is an error');
    } else {
      if (e === 'x') {
        e = '*';
      } else if (e === '%') {
        e = '/';
      }

      if (this.state.blackBox < 1) {
        this.setState({
          blackBox: [e],
        });
      } else if (this.state.blackBox.length > 12) {
        this.setState({
          blackBox: ['ERROR'],
          error: true,
          errorMessage: 'Input is too large'
        });
        console.log('over 10');
      } else {
        this.setState({
          blackBox: [...this.state.blackBox, e],
        });
      }
    }
  };
  onEvaluate = () => {
    try {
    let result = this.state.blackBox.join('');
    let evaluate = (Math.round(1000000 * eval(result)) / 1000000).toString();
    if (evaluate.length > 13) {
      this.setState({
        blackBox: ['ERROR'],
        error: true,
        errorMessage: 'Output is too large'
      });
    } else {
      this.setState({
        blackBox: [...evaluate.toString()],
      });
    }
  } catch(error) {
      this.setState({
        errorMessage: error.message,
        error: true
      });
  }
  };
  onAllClear = () => {
    this.setState({
      blackBox: [],
      error: false,
      errorMessage: ''
    });
  };
  onClear = () => {
    let pop = this.state.blackBox.slice(0, this.state.blackBox.length - 1);
    this.setState({
      blackBox: pop,
      error: false,
      errorMessage: ''
    });
  };
  handleDecimal = e => {
    if (
      this.state.blackBox.includes('.') &&
      !this.state.blackBox.includes('*') &&
      !this.state.blackBox.includes('/') &&
      !this.state.blackBox.includes('+') &&
      !this.state.blackBox.includes('-')
    ) {
      this.setState({
        errorMessage: 'Unable to enter two decimals in a row'
      });
    } else if (this.state.blackBox.length === 0) {
      this.setState({
        blackBox: ['0', '.'],
      });
    } else {
      this.setState({
        blackBox: [...this.state.blackBox, e],
      });
    }
  };
  render() {
    return (
      <div className="calculator-box" id="calculator" name="display">
          <p className="error-message">{this.state.errorMessage}</p>
          <div id="display-container">

          <span id="display">
            {this.state.blackBox.length === 0 ? '0' : this.state.blackBox}
          </span>
        </div>
        <ButtonsList
          handleClick={this.handleClick}
          onEvaluate={this.onEvaluate}
          onAllClear={this.onAllClear}
          onClear={this.onClear}
          handleDecimal={this.handleDecimal}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
