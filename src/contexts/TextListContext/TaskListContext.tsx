import React, { createContext, useReducer } from "react";
import TaskListReducer from "./TaskListReducer";

interface Task {
  id: string,
  taskText: string, 
  completed: boolean
}

interface ItaskActions {
  addTask: (newTaskText: string) => void,
  removeTask: (removedTask: Task) => void,
  completeTask: (completedTask: Task) => void,
  clearCompletedTask: () => void,
}

interface ITaskListContext {
  taskList: Task[],
  taskActions: ItaskActions
}

interface Props {
  children: React.ReactNode
}

const getPersistedTaskList = () => {
  const persistedTaskList = localStorage.getItem('taskList')

  if (persistedTaskList) {
    return JSON.parse(persistedTaskList) as Task[]
  }

  return []
}

const TaskListContext = createContext<ITaskListContext | null>(null)

const TaskListProvider: React.FC<Props> = ({ children }) => {
  const [taskList, dispatcher] = useReducer(TaskListReducer, getPersistedTaskList())

  const taskActions: ItaskActions = {
    addTask: (newTaskText) => {
      dispatcher({
        type: 'ADD_TASK',
        newTaskText
      })
    },
    removeTask: (removedTask) => {
      dispatcher({
        type: 'REMOVE_TASK',
        removeTask: removedTask
      })
    },
    completeTask: (completedTask) => {
      dispatcher({
        type: 'COMPLETE_TASK', 
        completeTask: completedTask
      })
    },
    clearCompletedTask: () => {
      dispatcher({
        type: 'CLEAR_COMPLETE_TASK'
      })
    },
  }

  return (
    <TaskListContext.Provider value={{ taskList, taskActions }}>
      {children}
    </TaskListContext.Provider>
  )
}

export default TaskListProvider
export { TaskListContext }
export type { ITaskListContext, Task }