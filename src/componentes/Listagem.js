import React, { Component } from 'react';

export default class Listagem extends Component {

    render() {
        return (
            <div className="listaSayHello">
                <ul>
                    {
                        this.props.state.listaHello.map(function (hello) {
                            return (
                                <li>{hello.texto} - {hello.numero}</li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}