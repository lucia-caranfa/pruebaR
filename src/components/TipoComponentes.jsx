import "./TipoComponentes.css"
import React, { Component } from 'react'

export default class TipoComponentes extends Component {
    render() {
        return (
            <>
                <h2>Componente de Clase</h2>
                <div className='compActual'>
                    <h3>{this.props.msg}</h3>
                </div>
            </>
        )
    }
}

/*import React from 'react'

function TipoComponentes(props) {
  return (
    <>
    <h2>Componente de Clase</h2>
    <div className='compActual'>
        <h3>{props.msg}</h3>
        </div>
    </>
  )
}

export default TipoComponentes*/

/*import React from 'react'

const TipoComponentes = (props) => <h3>{props.msg}</h3>

export default TipoComponentes*/