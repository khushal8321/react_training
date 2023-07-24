import React, { useContext } from 'react'
import { NewData } from './Compa'
export default function Compc({name}) {
    const finaldata= useContext(NewData)
  return (
    <div>
      <h1>final{ finaldata}</h1>
    </div>
  )
}
