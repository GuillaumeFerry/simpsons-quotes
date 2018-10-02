// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {
    constructor(working) {
        super(working);
        this.state = {
            on: working.on
        };
      }
    
      homerClickToWork = () => {
        this.setState({ on: !this.state.on});
      };
      
  render() {
    const HomerWork = this.state.on ? 'Woot.. voilà Mr Burns ! Au travail !' : 'Hmmmm... des donuts !!!';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.on ? 'on' : 'off'} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <div className="WorkButton">
            <button
                onClick={this.homerClickToWork}
                className={this.state.on ? 'on' : 'off'}
            >
                {HomerWork}
            </button>
        </div>
        <Quotes />
        <Lamp on />
        <Lamp />
      </div>
    );
  }
}

export default App;
