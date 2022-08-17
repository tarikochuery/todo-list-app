import { Task } from './TaskListContext'
import { v4 as uuidv4 } from 'uuid'

interface ITaskListFactory {
  addTask: (initialState: Task[], taskText: string|undefined) => Task[],
  removeTask: (initialState: Task[], taskToBeRemoved: Task | undefined) => Task[],
  toogleCompleteTask: (initialState: Task[], taskToBeCompleted: Task | undefined) => Task[],
  clearCompleteTasks: (initialState: Task[]) => Task[],
  filterList: (initialState: Task[], filter: 'all' | 'completed' | 'active' | undefined) => Task[]
}

const taskListFactory: ITaskListFactory = {
  addTask (initialState, taskText) {
    if (!taskText) return initialState
  
    const task:Task = {
      id: uuidv4(), 
      taskText,
      completed: false
    }
  
    return [...initialState, task]
  },

  removeTask(initialState, taskToBeRemoved) {
    if (!taskToBeRemoved) return initialState
    return initialState.filter(listedTask => listedTask.id !== taskToBeRemoved.id)
  },

  toogleCompleteTask(initialState, taskToBeCompleted) {
      if(!taskToBeCompleted) return initialState
    
    return initialState.map(task => {
      if (task.id === taskToBeCompleted.id) {
        const completed = !task.completed
        return {...task, completed}
      }

      return task
    })
  },

  clearCompleteTasks(initialState) {
    return initialState.filter(task => !task.completed)
  },

  filterList(initialState, filter) {
    if (!filter) return initialState

    switch (filter) {
      case 'all':
        return initialState
        
      case 'active':
        return initialState.filter(task => !task.completed)
        
      case 'completed':
        return initialState.filter(task => task.completed)
        
      default:
        return initialState
    }
  },
}

export default taskListFactory