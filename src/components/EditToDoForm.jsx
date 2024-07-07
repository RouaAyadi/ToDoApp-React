/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React ,{useState} from 'react'

const EditToDoForm = (props) => {
  const [value,setValue]=useState(props.task.task);
  const handleChange=(e)=>{
    setValue(e.target.value);
  }

  const handleSubmit=e=>{
    e.preventDefault();
    console.log('submitted');
    props.editTodo(value,props.task.id);
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' placeholder='Update Task' value={value} onChange={handleChange}/>
      <button type='submit' className='todo-btn'>Update task</button>
    </form>
  )
}

export default EditToDoForm