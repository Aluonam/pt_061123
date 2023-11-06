import React, { useState } from 'react'

const DetectedUpperCase = () => {

  const [inputUserText, setInputUserText] = useState()
  return (
    <>
    <br/>
    <div>Escribe una frase</div>
    <input onChange={(e)=>{setInputUserText(e.target.value)}}></input>
    <br/>
    <button onClick={()=>{}}>¿Cuáles son mayúsculas?</button>
    {inputUserText}

    </>
  )
}

export default DetectedUpperCase