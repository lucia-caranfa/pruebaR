import React, { Component } from "react";
import "./RendLista.css"

export default class RendLista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
        };
    }
    render() {
        return (
            <div className="listaRend">
                <h2>Renderizado Listas</h2>
                <h3>Estaciones del Año</h3>
                <ol>
                    {this.state.seasons.map((elem) => (
                        <li key={elem}>{elem}</li>
                    ))}
                </ol>
            </div>
        )
    }
}