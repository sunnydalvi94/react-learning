import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState(0)

  return (
    <>
        <h1>Choose the Color</h1>
        <input type="color" onChange={(e)=>(setColor(e.target.value))} />
        <p>Hex Code: {color}</p>
    </>
  )
}

export default App
