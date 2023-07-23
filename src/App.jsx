import { useState , useMemo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [myNum, setmyNUm] = useState(0)
  const [show, setshow]= useState(true)

  function numinc(){
       console.log("first")
      setmyNUm(myNum +1);
  }
  const countNumber =(num)=>{
    for(let i=0; i<100000000;i++){}
     return num
  }
  const checknumber= useMemo(()=>{
    return countNumber(myNum)
  },[myNum])

  // const checknumber = countNumber(myNum)

  return (
    <>
    <button onClick={numinc}>increase</button>
    <p>{checknumber}</p>
    <button onClick={() => setshow(!show)}
  >{show?"clicked me":"please cleked button"}</button>
     
    </>
  )
}

export default App
