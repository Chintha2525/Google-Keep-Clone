import React from 'react'
import { Delete } from "@material-ui/icons"


const Note = (props) => {
    function handleClick() {
        props.onDelete(props.id)
    }
  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.contant}</p>
      <button onClick={handleClick}>
        <Delete />
      </button>
    </div>
  )
}

export default Note
