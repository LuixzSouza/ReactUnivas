import { useState } from 'react'
import './App.css'

function App() {

  const [novo, setNovo] = useState(0);
  const [nome, setNome] = useState(false);

  const btnNome = () => {
    if(nome == true) {
      setNome(false)
    } else {
      setNome(true)
    }
  }

  return (
    <>
        <div className='div1' >
          {nome == true ? (
            <h1>Luz Antonio de Souza</h1>
          ) : <h1>...</h1>}
          <p>Sou um Dev.Jr Front-End atualmente trabalho como Freelancer e estou a procura de uma oportunidade</p>
          <p>Seu valor Luiz: {novo > 10 ? "Limite" : novo}</p>
        </div>
        <button onClick={() => setNovo(novo + 1)} >Adicionar +1</button>
        <button onClick={btnNome} >{nome == true ? "Esconder" : "Mostrar"}</button>
        <div className='hob hob1' >
          <p>HOB 01</p>
        </div>
        <div className='hob hob2'>
          <p>HOB 02</p>
        </div>
        <div className='hob hob3'>
          <p>HOB 03</p>
        </div>
        <h2 className='texto-vermelho' >Skill</h2>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>Node</li>
        </ul>
    </>
  )
}

export default App
