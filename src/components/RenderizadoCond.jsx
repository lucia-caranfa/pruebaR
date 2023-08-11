import React, { Component } from "react";
import "./RenderizadoCond.css"

function Login() {
    return (
        <div>
            <h2>Login</h2>
        </div>
    )
};

function Logout() {
    return (
        <div>
            <h2>Logout</h2>
        </div>
    )
};

export default class RenderizadoCond extends Component {
    constructor(props) {
        super(props);
        this.state = {
            session: true,
        }
    };
    render() {
        return (
            <div className="condicional">
                <h2>Renderizado condicional</h2>
                {this.state.session ? <Login /> : <Logout />}
            </div>
        )
    }
};