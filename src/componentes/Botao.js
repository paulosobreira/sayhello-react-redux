import React, { Component } from 'react';
//import TimelineApi from '../logicas/TimelineApi';
//import {connect} from 'react-redux';

export default class Botao extends Component {

  sayhello = () =>  {
    console.log('Say Hello');
  }

  render() {
    return (
      <div>
        <button onClick={this.sayhello}>Say Hello</button>
      </div>
    );
  }
}


/*
const mapStateToProps = state => {
  return {fotos : state.timeline}
};

const mapDispatchToProps = dispatch => {
  return {
    like : (fotoId) => {
      dispatch(TimelineApi.like(fotoId));
    },
    comenta : (fotoId,textoComentario) => {
      dispatch(TimelineApi.comenta(fotoId,textoComentario))
    },
    lista : (urlPerfil) => {
      dispatch(TimelineApi.lista(urlPerfil));
    }

  }
}

const TimelineContainer = connect(mapStateToProps,mapDispatchToProps)(Timeline);

export default TimelineContainer
*/