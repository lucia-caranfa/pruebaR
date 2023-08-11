import React, {Component} from "react";
import "./Eventos.css"

/*-----------------------------ES6---------------------------------------*/

export class EventosES6 extends Component {
    constructor(props) {
        super();
        this.state = {//propiedad state
            contador:0,
        };
        this.sumar = this.Sumar.bind(this);//propiedad sumar link con metodo
        this.restar = this.Restar.bind(this);
    };

    Sumar (e) {//metodo sumar
        this.setState({
            contador:this.state.contador + 1,
        })
    }

    Restar (e) {
        this.setState({
            contador:this.state.contador - 1,
        })
    }

    render () {
        return (
            <div className="eventos">
                <h2>Eventos en componente Clase ES6</h2>
                <h3>{this.state.contador}</h3>
                <button onClick={this.sumar}> + </button> {/*click vinculado con propiedad sumar*/}
                <button onClick={this.restar}> - </button>
            </div>
        )
    }
}

/*-----------------------------ES7---------------------------------------*/

export class EventosES7 extends Component {
        state = {//propiedad state
            contador:0,
        };

    Sumar = (e) => {//metodo sumar
        this.setState({
            contador:this.state.contador + 1,
        })
    }

    Restar = (e) => {
        this.setState({
            contador:this.state.contador - 1,
        })
    }

    render () {
        return (
            <div className="eventos">
                <h2>Eventos en componente Clase ES7</h2>
                <h3>{this.state.contador}</h3>
                <button onClick={this.Sumar}> + </button> {/*click vinculado con propiedad sumar*/}
                <button onClick={this.Restar}> - </button>
            </div>
        )
    }
}

/*-----------------------------Aspectos eventos-------------------------------------*/

export class MasSobreEventos extends Component {
    hadnleClick = (e,mensaje) => { //evento manejo de click
        console.log(e);
        console.log(mensaje);
    }

    render () {
        return (
            <div className="masEventos">
                <h2>Mas sobre Eventos</h2>
                <button onClick={(e)=> this.hadnleClick(e,"Pasando parametro por evento")}>Pasar parametro</button>
            </div>
        )
    }
}