import React, { Component } from 'react';
import '../App.css';
import Botao from '../componentes/Botao';
import Listagem from '../componentes/Listagem';
import { connect } from "react-redux";
import sayHelloRedux from '../actions/sayHelloReduxAction';
import sayHelloReduxAsync from '../actions/sayHelloReduxAsyncAction';
import sayGoodBye from '../actions/sayGoodByeAction';
import sayHelloReduxPromise from '../actions/sayHelloReduxPromiseAction';
import { bindActionCreators } from 'redux'

class AppRedux extends Component {
  render() {
    return (
      <div className='divBotao'>
        <Botao sayHello={this.props.sayHelloRedux} say={"Say Hello Redux"} />
        <Botao sayHello={this.props.sayHelloReduxAsync} say={"Say Hello Redux Async"} />
        <Botao sayHello={this.props.sayHelloReduxPromise} say={"Promise Say Hello Redux"} />
        <Botao sayHello={this.props.sayGoodBye} say={"Say GoodBye Another Redux"} />
        <Listagem listaHello={this.props.listaHello} listaBye={this.props.listaBye} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listaHello: state.sayHelloRedux.listaHello,
  listaBye: state.sayGoodByeRedux.listaBye
})

const mapDispatchToProps =
  dispatch => bindActionCreators({ sayHelloRedux, sayHelloReduxAsync, sayGoodBye, sayHelloReduxPromise }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AppRedux);
