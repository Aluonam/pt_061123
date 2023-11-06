import React, { useState } from 'react'

const DetectedConsonant = () => {
    const [inputText, setInputText] = useState("");
    const [totalNumConsonant, setTotalNumConsonant] = useState();

    const handleDetectedConsonant = (value)=>{
        setInputText(value)

        const vocals = ["a", "e", "i", "o", "u"];
        const letterByLetter = value.split(" ").join("").split("")
        let numberConsonants = 0
        letterByLetter.filter((letter)=>{
                const isVocal = vocals.some((element)=> element==letter.toLowerCase())
                if (!isVocal){numberConsonants++}
                } 
        )
        setTotalNumConsonant(numberConsonants)
    }
  return (
    <>
    <br/>
    <div>Escribe para detectas las consonantes</div>
    <br/>
    <input onChange={(e)=>{handleDetectedConsonant(e.target.value)}}></input>
    <br/>
    {totalNumConsonant}
    </>
  )
}

export default DetectedConsonant