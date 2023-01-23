  const AddContactForm = (props) => {
    return(
        <div>
        <h2>Add a new contact</h2>
        <form onSubmit={props.addPhone}>
          <div>
              name: <input type="text" name="name"/>
              number: <input name="number"/>
          </div>
          <div>
              <button type="submit">add</button>
          </div>
        </form>
      </div>
    )
  }

  export default AddContactForm