import React from "react";
import PropTypes from "prop-types";
import "./DefProps.css"

export default function DefProps(props) {
    return (<div>
        <h2>{props.porDefecto}</h2>
        <ul className="lista">
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano ? "Verdadero" : "Falso"}</li>
            <li>{props.arreglo.join(", ")}</li>
            <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
            <li>{props.elementoReact}</li>
            <li>{props.arreglo.map(props.funcion).join(", ")}</li>
            <li>{props.componenteReact}</li>
        </ul>
    </div>)
}

DefProps.defaultProps = { porDefecto: "Las Props", }
DefProps.propTypes = {
    numero: PropTypes.number.isRequired,
    cadena: PropTypes.string,
    booleano: PropTypes.bool,
    funcion: PropTypes.func,
    objeto: PropTypes.object,
    arreglo: PropTypes.array,
}