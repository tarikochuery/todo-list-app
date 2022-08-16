import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import TaskCard from '../TaskCard/TaskCard'
import { FooterButton, FooterButtonContainer, FooterContainer } from './style'
import { ITaskListContext, TaskListContext } from '../../contexts/TextListContext/TaskListContext'


const TaskList = () => {
  const { taskList, taskActions: { clearCompletedTask } } = useContext(TaskListContext) as ITaskListContext
  const [filteredList, setFilteredList] = useState(taskList)

  const filter = (filter: 'all' | 'completed' | 'active') => {
    switch (filter) {
      case 'all':
        setFilteredList(taskList)
        break
      case 'active':
        setFilteredList(taskList.filter(task => task.completed === false))
        break
      case 'completed':
        setFilteredList(taskList.filter(task => task.completed === true))
        break
    }
  }
     
  useEffect(() => {
    setFilteredList(taskList)
  }, [taskList])

  return (
    <div>
      {filteredList.map(task => (
        <TaskCard key={task.id} task={task}/>
      ))}
      <FooterContainer>
        <p style={{width: '25%'}}>4 items left</p>
        <FooterButtonContainer>
          <FooterButton onClick={() => { filter('all') }}>All</FooterButton>
          <FooterButton onClick={() => { filter('active') }}>Active</FooterButton>
          <FooterButton onClick={() => { filter('completed') }}>Completed</FooterButton>
        </FooterButtonContainer>
        <FooterButton onClick={clearCompletedTask}>Clear Completed</FooterButton>
      </FooterContainer>
    </div>
  )
}

export default TaskList