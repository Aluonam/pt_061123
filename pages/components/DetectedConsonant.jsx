import React, { useState } from 'react'

const DetectedConsonant = () => {
    const [inputText, setInputText] = useState("")
  return (
    <>
    <br/>
    <div>Escribe para detectas las consonantes</div>
    <br/>
    <input onChange={(e)=>{setInputText(e.target.value)}}></input>
    <br/>
    <button onClick={()=>{}}>Detectar</button>
    {inputText}
    </>
  )
}

export default DetectedConsonant