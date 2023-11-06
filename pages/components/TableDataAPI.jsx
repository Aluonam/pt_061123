import React, {useState, useEffect} from 'react'

const TableDataAPI = () => {

    const [dataAPI, setDataAPI] = useState()

    useEffect(() => {
      const apiUrl = `https://randomuser.me/api/?results=50`;
      fetch(apiUrl) 
      .then(response => response.json())
      .then(data=>console.log(data.results))
      .catch(error => console.log("error detected", error))
      
    }, [])
    

  return (
    <div>TableDataAPI</div>
  )
}

export default TableDataAPI