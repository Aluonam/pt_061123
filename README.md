Tarea principal

Consume una API y muestra parte de los datos en una tabla y otros en un modal (puedes repetir alguna columna)

API URL: https://randomuser.me/


Tareas secundarias

**Crea un input que permita escribir al usuario y al pulsar un botón pone la última letra de todas las palabras en mayúsculas mostrando el resultado en la pantalla.**
    1. Crea componente (InpuLastLetter) e importa en index.
    2. Crea input y botón para enviar con onChange y onClick. *El onchange recibe e y guarda con e.target.value en el set
    3. Crea función que ```const capitalLetter = ()=>{}```
                        3.1. Clonar array (de lo que ha escrito el usuario que está guardado en useState) 
                        ```const copyArr = structuredClone(dataInputUser)```
                        3.2. Hacer .split(" ") (separando por espacios) del array copiado 
                        ```const oneWord = copyArr.split(" ")```
                        3.3. Hacer map(()=>{}) del resultado del 3.2. 
                                El map recibe una palabra.
                                Crea una cosntante para separar las letras de esa palabra usando la palabraqrecibe.split("") 
                                Después crea otra const para pasar las letras a mayúsculas. 
                                Se especifica letras.at(-1) que nos permite coger el último carácter y .toUpperCase() para pasar a mayúsculas dicha letra.
                                Declara que la última letra  ```letra[letra.longitud-1]``` sea cambie por la constante que tiene guardada la ultima letra ya convertida en mayúscula.
                                Retorna las letras unidas con .join("")
                        3.4. Se cierra el map y se declara otro useState que contendrá la frase modificada con las letras finales en mayúscula. Al set se le pasa la variable donde se ha hecho todo el map y se une con los espacios usando .join(" ")

                                ```javascript 
                                cconst capitalLetter = ()=>{
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
                                .......
                                ```
                        3.5. Esta función se llama en el botón.
                        3.6. Se muestra el state que guarda la frase modificada en pantalla {}
**CÓDIGO COMPLETO**         
```javascript
    const [dataInputUser, setdataInputUser] = useState([])
    const [newSentece, setNewSentece] = useState()

    const capitalLetter = ()=>{
        Wconst copyArr = structuredClone(dataInputUser)
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
  ```

**Crea un input que permita escribir al usuario y cuenta las consonantes sacando el resultado en la pantalla a medida que escribe**

**Crea un input que permita escribir al usuario y cuenta las palabras sacando el resultado en la pantalla a medida que escribe**
