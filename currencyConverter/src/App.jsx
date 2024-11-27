import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='w-full max-w-md mx-auto bg-orange-500 text-white p-5 mt-11 text-3xl'>Currency App</h1>
    </> 
  )
}

export default App
