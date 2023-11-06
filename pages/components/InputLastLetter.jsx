import React, {useState} from 'react'

const InputLastLetter = () => {

    const [dataInputUser, setdataInputUser] = useState([])
    const [newSentece, setNewSentece] = useState()

    const capitalLetter = ()=>{
        const copyArr = structuredClone(dataInputUser)
        const oneWord = copyArr.split(" ")
        const lastLetter = oneWord.map((elementOneWord)=>{
           const letters = elementOneWord.split("");
           const UpperLetters = letters.at(-1).toUpperCase()
           letters[letters.length-1] = UpperLetters
           return(
            letters.join("")
           )
        })
        setNewSentece(lastLetter.join(" "))
    }
  return (
    <>
    <div>Escribe una frase</div>
    <br></br>
    <input onChange={(e)=>{setdataInputUser(e.target.value)}}></input>
    <br></br>
    <button onClick={()=>{capitalLetter()}}>Pon la última letra de cada palabra en mayúsculas</button>
    <br></br>
    {newSentece}
    </>
  )
}

export default InputLastLetter