import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './App.css'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [posts, setPosts] = useState([])
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null)

  // Buscar usuários
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(resposta => {
        setUsuarios(resposta.data) // agora salva o objeto todo (com id, name, etc)
      })
  }, [])

  // Buscar posts
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(resposta => {
        setPosts(resposta.data)
      })
  }, [])

  // Filtrar posts do usuário selecionado
  const postsFiltrados = posts.filter(post => post.userId === usuarioSelecionado)

  // Quando clica no nome do usuário
  function mostrarPost(id) {
    setUsuarioSelecionado(id)
  }

  return (
    <>
      <h1>Usuários</h1>

      {usuarios.length === 0 && <p>Aguarde...</p>}

      <ul>
        {usuarios.map(usuario => (
          <li 
            key={usuario.id}
            onClick={() => mostrarPost(usuario.id)}
            style={{ cursor: 'pointer', color: usuario.id === usuarioSelecionado ? 'blue' : 'black' }}
          >
            {usuario.name}
          </li>
        ))}
      </ul>

      {usuarioSelecionado && (
        <>
          <h2>Posts do Usuário</h2>
          <ul>
            {postsFiltrados.map(post => (
              <li key={post.id}>{post.body}</li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}

export default App
