import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useContext } from 'react'
import TaskCard from '../TaskCard/TaskCard'
import { FooterButton, FooterButtonContainer, FooterContainer } from './style'
import { ITaskListContext, TaskListContext } from '../../contexts/TextListContext/TaskListContext'
import { ThemeContext } from 'styled-components'



const TaskList = () => {
  const { taskList, taskActions: { clearCompletedTask } } = useContext(TaskListContext) as ITaskListContext
  const [filteredList, setFilteredList] = useState(taskList)
  const theme = useContext(ThemeContext)

  const clearSiblingsClickedStyle = useCallback((e: React.MouseEvent) => {
    const button = e.target as HTMLButtonElement
    if(button.parentElement) {
      const buttons = Array.from(button.parentElement.children) as HTMLButtonElement[]
      buttons.forEach(button => button.style.color = theme.colors.secondary.buttonColor)
    }
  }, [theme])

  const numberOfUncompletedTasks = useMemo(() => {
    return taskList.filter(task => task.completed === false).length
  }, [taskList])

  const filter = useCallback((filter: 'all' | 'completed' | 'active', e: React.MouseEvent) => {
    const button = e.target as HTMLButtonElement
    clearSiblingsClickedStyle(e)
    button.style.color = theme.colors.primary.buttonSelectedColor

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
  }, [taskList, theme, setFilteredList, clearSiblingsClickedStyle])
     
  useEffect(() => {
    setFilteredList(taskList)
  }, [taskList])

  return (
    <div>
      {filteredList.map(task => (
        <TaskCard key={task.id} task={task}/>
      ))}
      <FooterContainer>
        <p style={{width: '25%'}}>{numberOfUncompletedTasks} items left</p>
        <FooterButtonContainer>
          <FooterButton onClick={(e) => { filter('all', e) }}>All</FooterButton>
          <FooterButton onClick={(e) => { filter('active', e) }}>Active</FooterButton>
          <FooterButton onClick={(e) => { filter('completed', e) }}>Completed</FooterButton>
        </FooterButtonContainer>
        <FooterButton onClick={clearCompletedTask}>Clear Completed</FooterButton>
      </FooterContainer>
    </div>
  )
}

export default TaskList