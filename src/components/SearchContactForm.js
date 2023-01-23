import List from "./List"
import { useState } from 'react'

const SearchForm = (props) => {
  const people = props.people
  const [match, setMatch] = useState(false) 

  const searchNumber = (event) => {
    event.preventDefault()
    const newPerson = event.target.elements.name.value
    if (people.some(person => person.name === newPerson)) setMatch(people.filter(person => person.name === newPerson))
    else setMatch(false)
  }

    return(
      <div>
      <h2>Search</h2>
      <form onSubmit={searchNumber}>
          <div>
          name: <input type="text" name="name"/>
          </div>
       <div>
          <button type="submit">Search</button>
       </div>
      </form>
      { match && <List name={match[0].name} number={match[0].number}/>}
      
      
  </div>
    )
  }

  export default SearchForm