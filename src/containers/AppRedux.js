import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Botao from '../componentes/Botao';
import Listagem from '../componentes/Listagem';
import {connect} from "react-redux";
import sayHelloRedux from '../actions/sayHelloRedux';

class AppRedux extends Component {
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
          <Botao sayHello={(hello) => this.props.sayHelloRedux(hello)} say={"Say Hello Redux"} />
          <Listagem  listaHello={this.props.listaHello} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    listaHello: state.listaHello
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      sayHelloRedux: (hello) => {
            dispatch(sayHelloRedux(hello));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRedux);
