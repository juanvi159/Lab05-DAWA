import React, { Fragment, useState } from 'react'

const App = () => {
  //componentes
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: "39-44-5323523" }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const nuevoNombre = (event) =>{
    setNewName(event.target.value)
  }

  const personas = (event) =>{
    const nombres = persons.map((item)=>{return item['name']})
    if(nombres.includes(newName)){
      window.alert(`${newName} Ya existe en el phonebook`)
    } else {
      setPersons(persons.concat({name:newName,number:newNumber}))
    }
    event.preventDefault()
  }

  //retorno en la pagina
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={personas}>
        <div>
          Nombre : <input onChange={(event)=>{setNewName(event.target.value)}}/><br/>
          Numero : <input onChange={(event)=>{setNewNumber(event.target.value)}}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numeros</h2>
      {persons.map((value)=>{
        return <Fragment><div>Nombre: {value.name} <br/>Numero: {value.number}</div><br/></Fragment>
      })}
    </div>
  )
}

export default App
