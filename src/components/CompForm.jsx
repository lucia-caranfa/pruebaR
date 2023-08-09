import React from 'react'
import "./CompForm.css"


function CompForm() {
    return (
        <>
            <h2>Pruebas formularios</h2>
            <div className='formulario1'>
                <form>
                    <label htmlFor="nombre">
                        Nombre:
                    </label>
                    <input type="text" id='nombre' name='nombre' />
                </form>
            </div>
            <div className='formulario2'>
                <p>
                    <input type="checkbox" id='taste_1' name='taste_cherry' value="cherry" />
                    <label htmlFor="taste_1">Gusto cereza</label>
                </p>
                <p>
                    <input type="checkbox" id='taste_2' name='taste_orange' value="orange" />
                    <label htmlFor="taste_2">Gusto naranja</label>
                </p>
            </div>
        </>
    )
}

export default CompForm