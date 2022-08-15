import { Task } from './TaskListContext'
import TaskListFactory from './TaskListFactory'

type TaskListReducerType = {
  type: 'ADD_TASK' | 'REMOVE_TASK' | 'COMPLETE_TASK' | 'CLEAR_COMPLETE_TASK' | 'FILTER_TASK',
  newTask?: Task,
  removeTask?: Task,
  completeTask?: Task
  filter?: 'all' | 'completed' | 'active'
}

const TaskListReducer = (state: Task[], action:TaskListReducerType) => {
  switch (action.type) {
    case 'ADD_TASK':
      return TaskListFactory.addTask(state, action.newTask?.taskText)
    case 'REMOVE_TASK': 
      return TaskListFactory.removeTask(state, action.removeTask)
    case 'COMPLETE_TASK':
      return TaskListFactory.toogleCompleteTask(state, action.completeTask)
    case 'CLEAR_COMPLETE_TASK':
      return TaskListFactory.clearCompleteTasks(state)
    case 'FILTER_TASK':
      return TaskListFactory.filterList(state, action.filter)
    default:
      return state
  }
}

export default TaskListReducer
export type { TaskListReducerType }