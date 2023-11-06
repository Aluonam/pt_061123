import React, { useState } from 'react'

const WordsCounter = () => {
    
    const [inputUser, setInputUser] = useState()


  return (
    <>
    <div>WordsCounter</div>
    <input onChange={(e)=>{setInputUser(e.target.value)}}></input>
    {inputUser}
    </>
  )
}

export default WordsCounter