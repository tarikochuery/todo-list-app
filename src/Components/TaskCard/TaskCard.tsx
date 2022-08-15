import React from 'react'
import RadioInput from '../RadioInput/RadioInput'
import TaskCardStyle, { TaskDeleteButton } from './style'

function TaskCard() {
  return (
    <TaskCardStyle>
      <div style={{display: 'flex'}}>
        <RadioInput />
        <p style={{cursor: 'pointer'}}>Jog around the park 3x</p>
      </div>
      <TaskDeleteButton>
        <img src="/images/icon-cross.svg" alt="cross-icon" />
      </TaskDeleteButton>
    </TaskCardStyle>
  )
}

export default TaskCard