import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function factorial(num){
  if (num<0){
    return -1;
  } else if (num === 0){
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
}

function permutation(numOfObj, permSize) {
  let pre_d = numOfObj - permSize
  let q = factorial(numOfObj);
  let d = factorial(pre_d);
  return q/d;
}

console.log('lottery perm', permutation(14, 4));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
