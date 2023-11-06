import React, { useState } from 'react'

const WordsCounter = () => {

    const [inputUser, setInputUser] = useState([]);

    const [numberWords, setNumberWords] = useState(0);

    const counterWords = (value)=>{
        setInputUser(value)
        const lengthWord = value.split(" ").length 
        setNumberWords(lengthWord)
    }


  return (
    <>
    <div>WordsCounter</div>
    <input onChange={(e)=>{counterWords(e.target.value)}}></input>
    {inputUser}
    {numberWords}
    </>
  )
}

export default WordsCounter