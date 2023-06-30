import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [countextra, setExtraCount] = useState(0)

  const newfun = ()=>setCount((count)=>count + 1)
  
  console.log("---------------------------")
  const newfun1 = ()=>setExtraCount((countextra)=>countextra + 5)
  useEffect(()=>{
    console.log("use effect 1")
     
  },[count,countextra])
  useEffect(()=>{
    console.log("use effect 2")
  },[countextra])
 

  useEffect(()=>{
    console.log("use effect 3")
    
  },[count])

  return (
    <>
    <h1>count is {count} and {countextra}</h1>
    <button onClick={newfun}>click up </button>
    <button onClick={newfun1}>click down </button>
      
    </>
  )
}

export default App
