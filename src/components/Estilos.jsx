import React from 'react'
import moduleStyle from "./Estilos.module.css"

let myStyle ={
    borderRadius:".5rem",
    margin:"2rem auto",
    maxWidth:"50%",
    backgroundColor: "#fff",
    color: "#000"
}

function Estilos() {
  return (
    <div>
        <h3 style={myStyle}> Estilo en linea </h3> 
        <h3 className={moduleStyle.error}> Estilo desde modulo </h3> 
        <h3 className={moduleStyle.success}> Estilo desde modulo </h3> 
        </div>
  )
}

export default Estilos