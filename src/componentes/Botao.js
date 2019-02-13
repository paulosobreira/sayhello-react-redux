import React, { Component } from 'react';

export default class Botao extends Component {

  sayHello = () =>  {
    this.props.sayHello({ texto : this.props.say });
  }

  render() {
    return (
      <div>
        <button className="marginBotao" onClick={this.sayHello}>{this.props.say}</button>
      </div>
    );
  }
}

