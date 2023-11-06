import React, {useState, useEffect} from 'react'

const TableDataAPI = () => {

    const [dataAPI, setDataAPI] = useState([])

    useEffect(() => {
      const apiUrl = `https://randomuser.me/api/?results=20`;
      fetch(apiUrl) 
            .then(response => response.json())
            // .then(data=>console.log(data.results))
            .then(data=>setDataAPI(data.results))
            .catch(error => console.log("error detected", error))
      
    }, [])

    const dataForTable = dataAPI.map((actual)=>{
        return(
            <>
            <tr>
                <td>{actual.name.first} {actual.name.last}</td>
                <td>{actual.login.username}</td>
                <td>{actual.login.password}</td>
                <td>{actual.email}</td>
                <td>{actual.phone}</td>
            </tr>
            </>
        )
    })
    

  return (
    <>
    <div>TableDataAPI</div>
    <table>
        <thead>
            <tr>
                <td>Nombre y apellidos</td>
                <td>Nombre de usuario</td>
                <td>Contraseña</td>
                <td>Email</td>
                <td>Teléfono</td>
            </tr>
        </thead>
        <tbody>
            {dataForTable}
        </tbody>
    </table>
    </>
  )
}

export default TableDataAPI