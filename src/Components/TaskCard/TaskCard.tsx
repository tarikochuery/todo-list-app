import React from 'react'
import RadioInput from '../RadioInput/RadioInput'
import TaskCardStyle, { TaskDeleteButton } from './style'

interface Props {
  taskText: string
}

const TaskCard: React.FC<Props> = ({ taskText }) => {
  return (
    <TaskCardStyle>
      <div style={{display: 'flex'}}>
        <RadioInput />
        <p style={{cursor: 'pointer'}}>{taskText}</p>
      </div>
      <TaskDeleteButton>
        <img src="/images/icon-cross.svg" alt="cross-icon" />
      </TaskDeleteButton>
    </TaskCardStyle>
  )
}

export default TaskCard