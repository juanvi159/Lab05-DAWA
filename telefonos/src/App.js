import React, { useState } from 'react'

const App = () => {
  //componentes
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [ newName, setNewName ] = useState('')

  const nuevoNombre = (event) =>{
    setNewName(event.target.value)
  }

  const personas = (event) =>{
    setPersons(persons.concat({name:newName}))
    event.preventDefault()
  }

  //retorno en la pagina
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={personas}>
        <div>
          Nombre : <input onChange={nuevoNombre}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numeros</h2>
      {persons.map((value)=>{
        return <div>{value.name}</div>
      })}
    </div>
  )
}

export default App
