/* import axios from 'axios' */

const DeleteList = (props) => {
    /* const deleteMethod = () => {
        axios
          .delete(`http://localhost:3001/persons/${props.id}`)
          .then((response) => console.log(response.status))
    }
    const deleteNumber = (event) => {    
        deleteMethod()
    } */

    return(
      <div>
        <li>{props.name}: {props.number}</li>
     {/*    <button id={props.id} onClick={deleteNumber}>Delete</button> */}
      </div>
    )
  }

  export default DeleteList