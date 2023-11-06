import React, {useState} from 'react'

const InputLastLetter = () => {

    const [dataInputUser, setdataInputUser] = useState([])
  return (
    <>
    <div>InputLastLetter</div>
    <br></br>
    <input onChange={(e)=>{setdataInputUser(e.target.value)}}></input>
    <button onClick={()=>{}}>Pon la última letra en mayúsculas</button>
    {dataInputUser}
    </>
  )
}

export default InputLastLetter