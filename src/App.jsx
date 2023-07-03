import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [string, setString] = useState("hello")
  let onchange = (event)=>{
    let newstring = event.target.value;
    
    setString(newstring)
  
  }

  return (
   <>
   <input type="text" onChange={onchange}></input><p>{string}</p> length is {string.length}
   </>
  )
}

export default App
