import React, { Component } from 'react';
import '../App.css';
import Botao from '../componentes/Botao';
import Listagem from '../componentes/Listagem';
import { connect } from "react-redux";
import sayHelloRedux from '../actions/sayHelloRedux';
import sayHelloReduxAsync from '../actions/sayHelloReduxAsync';
import sayGoodBye from '../actions/sayGoodBye';

class AppRedux extends Component {
  render() {
    return (
      <div className='divBotao'>
        <Botao sayHello={(hello) => this.props.sayHelloRedux(hello)} say={"Say Hello Redux"} />
        <Botao sayHello={(hello) => this.props.sayHelloReduxAsync(hello)} say={"Say Hello Redux Async"} />
        <Botao sayHello={(hello) => this.props.sayGoodBye(hello)} say={"Say GoodBye Another Redux"} />
        <Listagem listaHello={this.props.listaHello} listaBye={this.props.listaBye} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
    listaHello: state.sayHelloRedux.listaHello,
    listaBye: state.sayGoodByeRedux.listaBye
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sayHelloRedux: (hello) => {
      dispatch(sayHelloRedux(hello));
    },
    sayHelloReduxAsync: (hello) => {
      dispatch(sayHelloReduxAsync(hello));
    },
    sayGoodBye: (bye) => {
      dispatch(sayGoodBye(bye));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRedux);
