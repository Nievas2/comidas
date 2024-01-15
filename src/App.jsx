import { useState } from 'react'
import './App.css'
import { Buscador } from './components/buscador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Buscador/>
    </>
  )
}

export default App
