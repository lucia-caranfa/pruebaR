import React from 'react'
import "./Ternarios.css"

function Ternarios() {
    let autor = false;
    return (
        <>
            <h2>Ternarios</h2>
            <div className='ternarios'>
                <p>
                    {autor ? "El usuario se encuentra logueado" : "El usuario NO se encuentra logueado"}
                </p>
            </div>
        </>
    )
}

export default Ternarios