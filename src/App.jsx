import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Compa from './component/Compa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Compa name={"hello khushal"}></Compa> 
   </>
  )
}

export default App
