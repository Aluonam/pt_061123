Tarea principal

Consume una API y muestra parte de los datos en una tabla y otros en un modal (puedes repetir alguna columna)

API URL: https://randomuser.me/   --> https://randomuser.me/api/?results=50

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
    1. Crea e importa componente
    2. Crea dentro del componente el input que va a guardar lo que recibe con e.target.value y se lo va a pasar como props a la función que crearemos a continuación.
    3. Crea useState para guardar lo que escribe el usuario.
    4. Crea función flecha que recibirá un valor (lo que escribe el usuario y que ponemos en el input como e.target.value).
                4.1. Recibe valor como props. ```const handleDetectedConsonant = (value)=>{```
                4.2. Especifica que el set tiene ese valor. ```setInputText(value)```
                4.3. Crea const con un array con las vocales. ``` const vocals = ["a", "e", "i", "o", "u"];```
                4.4. Crea const que coge el valor recibido por props (lo que ha escrito el usuario) y le hace .split(" ") para separar por espacios.  .join("") para unir todas las letras juntas sin espacios. y .split("") para separar cada letra. 
                ```const letterByLetter = value.split(" ").join("").split("")```
                *Si imprimes por consola el resultado será cada letra por separado en un array y sin espacios.
                4.5.Crea variable (let) que será el contador (guardará el numero del consonantes que vayan escribiendo). 
                ```let numberConsonants = 0```
                4.5. Se coge la constante que guarda el array de letras separadas (declarada en el punto 4.4) y se le hace un filter(()=>{}).
                        En el filter se recibe cada letra
                        Se declara una const para saber si es vocal cogiendo la constante que contiene las vocales (declarada en el punto 4.3) y se hace .some(()=>)
                        El some recibe el elemento y compara ese elemento con el parámetro que ha recibido el filter (letra por letra) haciendolo minúscula usando .toLowerCase() 
                        ```const isVocal = vocals.some((element)=> element==letter.toLowerCase())```
                        If es distinto de vocal añade al contador 1 (++)
                        ```if (!isVocal){numberConsonants++}```
                        El some finaliza, el filter finaliza.
                4.6. Se crea otro useState para guardar el resultado de esta funcion (se declara fuera) guardará el número del contador una vez aplicada la lógica anterior.
                Y dentro de la función se declara que el set de ese nuevo estado (contador) es la variable que guarda el contador dentro de la función.

    5. Se muestra por pantalla el resultado de esta función guardado en el state del contador.
**CÓDIGO COMPLETO** 
```javascript
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
    <div>Escribe para detectar las consonantes</div>
    <br/>
    <input onChange={(e)=>{handleDetectedConsonant(e.target.value)}}></input>
    <br/>
    {totalNumConsonant}
    </>
  )
} 
```


**Crea un input que permita escribir al usuario y cuenta las palabras sacando el resultado en la pantalla a medida que escribe**

    1. Crea componente e importalo
    2. Crea estrucutura del input con onChange que mandará por props (e.target.value) a la función.
    3. Crea useState para guardarlo que escribe el usuario (por defecto se guardará en un array).
    4. Crea useState que guardará el contador, por defecto será 0.
    5. Crea función (llamada en el onChange) que recibe como parámetro el valor que escribe el usuario.
                5.1. Recibe por props el valor ```const counterWords = (value)=>{}```
                5.2. Ese valor se mete en el useState que guarda lo que escriba el usuario. ```setInputUser(value)```
                5.3. Crea una const que haga del valor que escribe el usuario (no de la variable del useState, sino del parámetro que acaba de recibir la función) .split(" ") para separar los espacios y .length para ver la longitud.  ```const lengthWord = value.split(" ").length ```
                5.4. Se guarda la const creada anteriormente (5.3) en el set del useState que guarda el contador ```setNumberWords(lengthWord)```
    6. Se muestra en pantalla la variable contador del useState. ```{numberWords}```

**CÓDIGO COMPLETO** 
```javascript
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
```
