import React, { useCallback, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ITaskListContext, Task, TaskListContext } from '../../contexts/TextListContext/TaskListContext'
import RadioInput from '../RadioInput/RadioInput'
import TaskCardStyle, { TaskDeleteButton } from './style'

interface Props {
  task: Task,
}

const TaskCard: React.FC<Props> = ({ task }) => {
  const { taskText, completed } = task
  const { taskActions: { removeTask, completeTask } } = useContext(TaskListContext) as ITaskListContext
  const { colors } = useContext(ThemeContext)
  
  const handleDeleteClick = () => {
    removeTask(task)
  }

  const handleCompleteClick = useCallback(() => {
    completeTask(task)
  }, [completeTask, task])

  return (
    <TaskCardStyle>
      <div style={{display: 'flex'}}>
        <RadioInput completed={completed} onClick={handleCompleteClick}/>
        {
          !completed 
            ?
              <p style={{cursor: 'pointer'}}>{taskText}</p> 
            : 
              <p 
                style={{cursor: 'pointer', 
                        textDecorationLine: 'line-through', 
                        color: colors.secondary.placeholderColor}}
              >{taskText}</p>
        }
      </div>
      <TaskDeleteButton onClick={handleDeleteClick}>
        <img src="/images/icon-cross.svg" alt="cross-icon" />
      </TaskDeleteButton>
    </TaskCardStyle>
  )
}

export default TaskCard