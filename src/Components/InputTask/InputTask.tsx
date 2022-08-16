import React, { useContext } from 'react'
import { ITaskListContext, TaskListContext } from '../../contexts/TextListContext/TaskListContext'
import RadioInput from '../RadioInput/RadioInput'
import TaskLabel, { TaskInput } from './style'



const InputTask = ()  =>{
  const { taskActions: { addTask } } = useContext(TaskListContext) as ITaskListContext

  const handleInputSubmit = (event:React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const inputElement = event.target as HTMLInputElement
      const newTaskText = inputElement.value
      inputElement.value = ''
  
      addTask(newTaskText)
    }
  }

  return (
    <TaskLabel>
      <RadioInput />
      <TaskInput placeholder='Create a new todo...' onKeyDown={handleInputSubmit}/>
    </TaskLabel>
  )
}

export default InputTask