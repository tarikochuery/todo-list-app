import React from 'react'
import { TaskListReducerType } from '../../contexts/TextListContext/TaskListReducer'
import RadioInput from '../RadioInput/RadioInput'
import TaskLabel, { TaskInput } from './style'

interface Props {
  dispatchTaskList: React.Dispatch<TaskListReducerType>
}

const InputTask:React.FC<Props> = ( { dispatchTaskList } )  =>{
  const handleInputSubmit = (event:React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const inputElement = event.target as HTMLInputElement
      const newTaskText = inputElement.value
      inputElement.value = ''
  
      const addTaskOptions:TaskListReducerType = {type: 'ADD_TASK', newTaskText}
  
      dispatchTaskList(addTaskOptions)

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