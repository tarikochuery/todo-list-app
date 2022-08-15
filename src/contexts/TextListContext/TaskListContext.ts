import { createContext } from 'react'

interface Task{
  id: number,
  taskText: string,
  completed: boolean
}

const TaskListContext = createContext<Task[]>([])

export default TaskListContext

export type { Task }