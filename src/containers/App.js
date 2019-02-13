import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Botao from '../componentes/Botao';
import Listagem from '../componentes/Listagem';

class App extends Component {


	constructor(){
		super();
		this.state = { listaHello:[]};
	}

  sayHello = (hello) =>  {
    hello.numero =  this.state.listaHello.length;
    this.state.listaHello.push(hello);
    this.setState(this.state);
    console.log(this.state);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className='divBotao'>
          <Botao sayHello={(hello) => this.sayHello(hello)} say={"Say Hello"} />
          <Listagem  listaHello={this.state.listaHello} />
        </div>
      </div>
    );
  }
}

export default App;



