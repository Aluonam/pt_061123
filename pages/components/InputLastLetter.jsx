import React from 'react'

const InputLastLetter = () => {
  return (
    <>
    <div>InputLastLetter</div>
    <br></br>
    <input onChange={(e)=>{console.log(e.target.value)}}></input>
    <button onClick={()=>{}}>Pon la última letra en mayúsculas</button>
    </>
  )
}

export default InputLastLetter