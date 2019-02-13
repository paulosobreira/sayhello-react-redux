import React, { Component } from 'react';
import '../App.css';
import Botao from '../componentes/Botao';
import Listagem from '../componentes/Listagem';
import {connect} from "react-redux";
import sayHelloRedux from '../actions/sayHelloRedux';

class AppRedux extends Component {
  render() {
    return (
        <div className='divBotao'>
          <Botao sayHello={(hello) => this.props.sayHelloRedux(hello)} say={"Say Hello Redux"} />
          <Listagem  listaHello={this.props.listaHello} />
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
