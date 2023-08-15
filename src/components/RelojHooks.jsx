import React, {useState,useEffect} from 'react'

function Reloj ({hour}) {  //componente reloj que trae y muestra la hora en pantalla
    return <h3>{hour}</h3>
}

function RelojHooks() {
    const [hour, setHour] = useState(new Date().toLocaleDateString())
    const [visible, setVisible] = useState(false)

useEffect(()=>{ //inincia el reloj 
    let temporizador
if (visible) { //si visible es true, inicia el temporizador y se va actualizando cada 1 seg
    temporizador = setInterval(()=>{
        setHour(new Date().toLocaleTimeString())
    },1000)
} else {
    clearInterval(temporizador);
    return ()=> { clearInterval(temporizador)}
}
},[visible])  //se va a ejecutar solo cuando la variable visible cambie al usar los botones

  return (
    <div>
        <h2>Hooks - useEffect</h2>
        {visible && <Reloj hour={hour}/>}  {/*si visible es true, trae el componente Reloj y muestra la hora*/}
        <button onClick={()=>setVisible(true)}> Start </button>
        <button onClick={()=>setVisible(false)}> Stop </button>
        </div>
  )
}

export default RelojHooks