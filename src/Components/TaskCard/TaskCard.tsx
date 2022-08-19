import React, { ReactElement, useCallback, useContext, useRef } from 'react'
import { ThemeContext } from 'styled-components'
import { ITaskListContext, Task, TaskListContext } from '../../contexts/TextListContext/TaskListContext'
import RadioInput from '../RadioInput/RadioInput'
import TaskCardStyle, { TaskDeleteButton } from './style'
import { useDrag, useDrop, XYCoord } from 'react-dnd'

interface Props {
  task: Task,
}

const TaskCard: React.FC<Props> = ({ task }) => {
  const { taskList } = useContext(TaskListContext) as ITaskListContext
  const { taskText, completed } = task
  const { taskActions: { removeTask, completeTask } } = useContext(TaskListContext) as ITaskListContext
  const { colors } = useContext(ThemeContext)
  const ref = useRef<HTMLDivElement | null>(null)


  const [{ isDragging }, dragRef] =  useDrag({
    type: 'CARD',
    item: {idx: task.idx},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover: (item: Task, monitor) => {
      const draggedIndex = item.idx
      const targetIndex = task.idx

      if (draggedIndex === targetIndex) return

      const targetSize = ref.current?.getBoundingClientRect() as DOMRect
      const targetCenter = (targetSize?.bottom - targetSize?.top)/2

      const draggedOffSet = monitor.getClientOffset() as XYCoord
      const draggedTop = draggedOffSet?.y - targetSize.top

      if(draggedIndex < targetIndex && draggedTop < targetCenter) return

      if (draggedIndex > targetIndex && draggedTop > targetCenter) return
      
    }
  })

  const handleDeleteClick = () => {
    removeTask(task)
  }

  const handleCompleteClick = useCallback(() => {
    completeTask(task)
  }, [completeTask, task])

  dragRef(dropRef(ref))

  return (
    <TaskCardStyle ref={ref} isDragging={isDragging}>
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