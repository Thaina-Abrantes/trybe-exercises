import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super();

    // this.state = {
    //   numeroDeCliques: 0,
    // }
  
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
  }

  //Sintaxe Public Class Field:
  state = {
    numeroDeCliquesBotão1: 0,
    numeroDeCliquesBotão2: 0,
    numeroDeCliquesBotão3: 0,
  }

  handleClick1() {
    this.setState((prevState, _props) => ({
      numeroDeCliquesBotão1: prevState.numeroDeCliquesBotão1 + 1,
    }));
  }

  handleClick2() {
    this.setState((prevState, _props) => ({
      numeroDeCliquesBotão2: prevState.numeroDeCliquesBotão2 + 1,
    }));
  }

  handleClick3() {
    this.setState((prevState, _props) => ({
      numeroDeCliquesBotão3: prevState.numeroDeCliquesBotão3 + 1,
    }));
  }

  render () {
    const { numeroDeCliquesBotão1, numeroDeCliquesBotão2, numeroDeCliquesBotão3 } = this.state;
    return (
      <div className="App">
        <button onClick={this.handleClick1}>Meu botão 1. Clicado {numeroDeCliquesBotão1} x.</button>
        <button onClick={this.handleClick2}>Meu botão 2. Clicado {numeroDeCliquesBotão2} x.</button>
        <button onClick={this.handleClick3}>Meu botão 3. Clicado {numeroDeCliquesBotão3} x.</button>
      </div>
    );
  }
}

export default App;
