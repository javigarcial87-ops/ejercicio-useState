import './App.css'
import {useState} from "react"

function App() {
 
    const [name, setName] = useState("Sofía")
    const {newName,setNewName} = useState("")

    const changeName = (e)=> {
        e.preventDefault()

        if (newName.trim()!=="") {
            setName(newName)
            setNewName("")
        }
    }

    return (
        <div>
            <h2>Nombre del profesor:{name}</h2>

            <form onSubmit={changeName} >
                <input 
                type="text"
                value ={newName}
                onChange={(e) => setName(e.target.value)}
                placeholder='añade un nombre' />

                <button type="submit">Añadir</button>
            </form>

            <ul>
                <li onClick={()=> setName("Data")}>Data</li>
                <li onClick={()=> setName("Reyes")}>Reyes</li>
                <li onClick={()=> setName("Yolanda")}>Yolanda</li>
            </ul>

        </div>
    )

}

export default App
