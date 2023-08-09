import React from 'react'
import "./Arrays.css"

function Arrays() {
    let estaciones = ["Primavera", "Otoño", "Verano", "Invierno"];
    const numbers = [1, 2, 3, 4, 5];

    const listItems = numbers.map((num) =>
        <li key={num.toString()}> {num}</li>
    )

    return (
        <>
            <h2>Arrays</h2>
            <div className='arrays1'>
                <ul>
                    {estaciones.map((e, index) => (
                        <li key={index}>{e}</li>
                    ))}
                </ul>
            </div>
            <div className='arrays2'>
                <ul>
                    {listItems}
                </ul>
            </div>
        </>
    )
}

export default Arrays