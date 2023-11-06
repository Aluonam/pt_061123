import React from 'react'

const DetectedUpperCase = () => {
  return (
    <>
    <br/>
    <div>Escribe una frase</div>
    <input onChange={(e)=>{e.target.value}}></input>
    <br/>
    <button onClick={()=>{}}>¿Cuáles son mayúsculas?</button>

    </>
  )
}

export default DetectedUpperCase