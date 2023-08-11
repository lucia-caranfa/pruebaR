import React, { Component } from "react";
import data from "../helpers/data.json"
import "./RendElem.css"

function ListaJson(props) {
    return (
        <li>
            <a href={props.el.web} target="_blank">{props.el.name}</a>
        </li>
    );
}

export default class RendElem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="elemRend">
                <h2>Renderizado Elemento</h2>
                <h3>Frameworks Front End JavaScript</h3>
                <ul>
                    {data.frameworks.map((el) => (<ListaJson key={el.id} el={el} />))}
                </ul>
            </div>
        )
    }
}