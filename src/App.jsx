import { useState , useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState()
  const [myData, setmyData] = useState("")


  const count = useRef(0)
  console.log(count)
  console.log(myData)
  useEffect(()=>{
    count.current = count.current +1
  })

  return (
    <>
      
      <input type="text" value={myData} onChange={(e)=>{setmyData(e.target.value)}}></input>
      <p>{count.current}</p>
    </>
  )
}

export default App
