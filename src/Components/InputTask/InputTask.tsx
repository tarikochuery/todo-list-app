import React from 'react'
import RadioInput from '../RadioInput/RadioInput'
import TaskLabel, { TaskInput } from './style'

function InputTask() {
  return (
    <TaskLabel>
      <RadioInput />
      <TaskInput placeholder='Create a new todo...'/>
    </TaskLabel>
  )
}

export default InputTask