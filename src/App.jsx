import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UsuarioForm } from './components/UsuarioForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UsuarioForm />
    </>
  )
}

export default App
