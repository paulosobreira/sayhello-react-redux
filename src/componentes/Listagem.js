import React, { Component } from 'react';

export default class Listagem extends Component {

    componentWillMount(){
        console.log(this.props.listaHello);
    }

    render() {
        return (
            <div className="listaSayHello">
                <ul>
                    {
                        this.props.listaHello.map(function (hello) {
                            return (
                                <li key={hello.numero} >{hello.texto} - {hello.numero}</li>
                            );
                        })
                    }                    
                </ul>
            </div>
        );
    }
}