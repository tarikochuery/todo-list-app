import { Task } from './TaskListContext'
import TaskListFactory from './TaskListFactory'

type TaskListReducerType = {
  type: 'ADD_TASK' | 'REMOVE_TASK' | 'COMPLETE_TASK' | 'CLEAR_COMPLETE_TASK' | 'MOVE',
  newTaskText?: string,
  removeTask?: Task,
  completeTask?: Task,
  draggedIndex?: number,
  targetIndex?: number
}

const TaskListReducer = (state: Task[], action:TaskListReducerType) => {
  switch (action.type) {
    case 'ADD_TASK':
      return TaskListFactory.addTask(state, action.newTaskText)
    case 'REMOVE_TASK': 
      return TaskListFactory.removeTask(state, action.removeTask)
    case 'COMPLETE_TASK':
      return TaskListFactory.toogleCompleteTask(state, action.completeTask)
    case 'CLEAR_COMPLETE_TASK':
      return TaskListFactory.clearCompleteTasks(state)
    // case 'MOVE':
    //   return TaskListFactory.move(state, action.draggedIndex, action.targetIndex)
    default:
      return state
  }
}

export default TaskListReducer
export type { TaskListReducerType }