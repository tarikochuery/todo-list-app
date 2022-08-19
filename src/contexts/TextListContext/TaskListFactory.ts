import { Task } from './TaskListContext'
import { v4 as uuidv4 } from 'uuid'

interface ITaskListFactory {
  addTask: (initialState: Task[], taskText: string|undefined) => Task[],
  removeTask: (initialState: Task[], taskToBeRemoved: Task | undefined) => Task[],
  toogleCompleteTask: (initialState: Task[], taskToBeCompleted: Task | undefined) => Task[],
  clearCompleteTasks: (initialState: Task[]) => Task[],
  move?: (initialState: Task[], from: number | undefined, to: number | undefined) => void
}

const persistState = (key: string, state: any) => {
  localStorage.setItem(key, JSON.stringify(state))
}

const taskListFactory: ITaskListFactory = {
  addTask (initialState, taskText) {
    if (!taskText) return initialState
  
    const task:Task = {
      id: uuidv4(),
      idx: initialState.length, 
      taskText,
      completed: false
    }
    
    persistState('taskList', [...initialState, task])
    return [...initialState, task]
  },

  removeTask(initialState, taskToBeRemoved) {
    if (!taskToBeRemoved) return initialState
    persistState('taskList', initialState.filter(listedTask => listedTask.id !== taskToBeRemoved.id))
    return initialState.filter(listedTask => listedTask.id !== taskToBeRemoved.id)
  },

  toogleCompleteTask(initialState, taskToBeCompleted) {
    if(!taskToBeCompleted) return initialState

    const newTaskList = initialState.map(task => {
        if (task.id === taskToBeCompleted.id) {
          const completed = !task.completed
          return {...task, completed}
        }

        return task
    })
    persistState('taskList', newTaskList)
    return newTaskList
  },

  clearCompleteTasks(initialState) {
    persistState('taskList', initialState.filter(task => !task.completed))
    return initialState.filter(task => !task.completed)
  },

  move(initialState, from, to) {
    console.log(from, to)
    return initialState
  },
}

export default taskListFactory