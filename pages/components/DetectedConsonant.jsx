import React, { useState } from 'react'

const DetectedConsonant = () => {
    const [inputText, setInputText] = useState("")

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

        console.log(letterByLetter)
        console.log("consonantes: ", numberConsonants)
    }
  return (
    <>
    <br/>
    <div>Escribe para detectas las consonantes</div>
    <br/>
    <input onChange={(e)=>{handleDetectedConsonant(e.target.value)}}></input>
    <br/>
    {inputText}
    </>
  )
}

export default DetectedConsonant