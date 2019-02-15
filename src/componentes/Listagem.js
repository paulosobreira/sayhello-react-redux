import React, { Component } from 'react';

export default class Listagem extends Component {

    render() {
        return (
            <div className="listaSayHello">
                <ul>
                    {
                        this.props.listaHello.map(function (hello) {
                            return (
                                <li key={hello.texto+hello.numero}> {hello.texto} - {hello.numero}</li>
                            );
                        })
                    }                    
                </ul>
                <ul>
                    {
                        this.props.listaBye.map(function (bye) {
                            return (
                                <li key={bye.texto+bye.numero}> {bye.numero} - {bye.texto} </li>
                            );
                        })
                    }                    
                </ul>                
            </div>
        );
    }
}