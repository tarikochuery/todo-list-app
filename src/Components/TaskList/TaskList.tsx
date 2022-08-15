import React from 'react'
import TaskCard from '../TaskCard/TaskCard'
import { FooterButton, FooterButtonContainer, FooterContainer } from './style'

function TaskList() {
  return (
    <div>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
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