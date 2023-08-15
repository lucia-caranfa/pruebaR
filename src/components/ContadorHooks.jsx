import React, { useState } from 'react'
import "./ContadoorHooks.css"

function ContadorHooks(props) {
    const [contador, setContador] = useState(0)
    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)
    return (
        <div className='contador'>
            <h2>Hooks - useState</h2>
            <p>Contador de {props.titulo}</p>
            <div>
                <button onClick={sumar}> + </button>
                <button onClick={restar}> - </button>
            </div>
            <h3>{contador}</h3>
        </div>
    )
}

ContadorHooks.defaultProps = {
    titulo: "Clicks",
}

export default ContadorHooks