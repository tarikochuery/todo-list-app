import React from 'react'
import { useContext } from 'react'
import TaskListContext from '../../contexts/TextListContext/TaskListContext'
import TaskCard from '../TaskCard/TaskCard'
import { FooterButton, FooterButtonContainer, FooterContainer } from './style'

function TaskList() {
  const taskList = useContext(TaskListContext)
  return (
    <div>
      {taskList.map(task => (
        <TaskCard key={task.id} taskText={task.taskText}/>
      ))}
      <FooterContainer>
        <p style={{width: '25%'}}>4 items left</p>
        <FooterButtonContainer>
          <FooterButton>All</FooterButton>
          <FooterButton>Active</FooterButton>
          <FooterButton>Completed</FooterButton>
        </FooterButtonContainer>
        <FooterButton>Clear Completed</FooterButton>
      </FooterContainer>
    </div>
  )
}

export default TaskList