import React, { createContext } from 'react'
import Compb from './Compb'
const NewData = createContext();
 function Compa({name}) {
    
  return (
    <>
    <NewData.Provider value={"jay khodiyar"}>
        <Compb/>
    </NewData.Provider>
    
    </>
  )
}

export default Compa;
export { NewData };

