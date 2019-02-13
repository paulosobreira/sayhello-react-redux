import React, { Component } from 'react';

export default class Botao extends Component {

  sayHello = () =>  {
    this.props.sayHello({ texto : 'Say Hello' });
  }
  render() {
    return (
      <div>
        <button className="marginBotao" onClick={this.sayHello}>Say Hello</button>
        <button className="marginBotao" >Say Hello Redux</button>
      </div>
    );
  }
}

