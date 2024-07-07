/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'


const ToDo = (props) => {
  return (
    <div className='Todo'>
      <p onClick={()=>props.toggleComplete(props.task.id)}  className={`${props.task.completed ? 'completed':""}`}>{props.task.task}</p>
      <div>
        <FontAwesomeIcon icon ={faPenToSquare} onClick={()=>props.editTodo(props.task.id)} />
        <FontAwesomeIcon icon ={faTrash} onClick={()=>props.deleteTodo(props.task.id)}/>
      </div>
    </div>
  )

}

export default ToDo