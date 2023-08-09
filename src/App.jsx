//import { useState } from 'react'
import './App.css'
import CompForm from './components/compForm'
import Ternarios from './components/Ternarios'
import Arrays from './components/Arrays'
import TipoComponentes from './components/TipoComponentes'

function App() {
  //const [count, setCount] = useState(0)
  let nombre = "Lucía Caranfa"

  return (
    <>
      <h1>Vite + React</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
  </p>*/}
      <div className='container' id={nombre}>
        <h2>Pruebas en React</h2>
        <article>
          <h1>{nombre}</h1>
        </article>
      </div>
      <CompForm />
      <Ternarios />
      <Arrays />
      <TipoComponentes msg="Mensaje desde propiedades"/>
    </>
  )
}

export default App