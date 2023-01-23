import { useState, useEffect } from 'react'
import AddContactForm from "./components/addContactForm"
import SearchPersonForm from './components/SearchContactForm'
import axios from 'axios'
import DeleteList from './components/DeleteList'

const App = () => {

  const [people, setPeople] = useState([]) 
    const addPhone = (event) => {
        event.preventDefault()
        const phoneObject = {
            name: event.target.elements.name.value,
            number: event.target.elements.number.value
        }
        const added = people.some(person => person.name === event.target.elements.name.value)
        if (!added){
          axios
          .post('http://localhost:3001/people', phoneObject)
          .then(response => {
            console.log(response.data)
            setPeople(people.concat(response.data))
          })
          .catch(error => {
              console.log(error)
          })}
        else {
          alert("The contact is already in your phonebook")
          }
      
    }

  useEffect(() => {
    axios
      .get('http://localhost:3001/people')
      .then(response => {
        setPeople(response.data)
      })
      .catch(error =>{
        console.log('It wasnt possible to get data: ', error)
      })
  }, [])

  return (
    <div>
      <div>
        <SearchPersonForm people={people}/>
      </div>

      <div>
        <AddContactForm addPhone={addPhone}/>
      </div>

      <div>
      <h2>Numbers</h2>
        <ul>
          {people.map(person => { 
          return (
          <DeleteList name={person.name} number={person.number} key={person._id} id={person._id}/>
          )
        })}
        </ul>
      </div>
    </div>
  )
}

export default App