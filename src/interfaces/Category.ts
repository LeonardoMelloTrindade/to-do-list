import { type Task } from './Task';

export interface Category {
  id: number,
  name: string,
  image?: string,
  groupId: number,
  alltasks: string,
  alltasksFinished: string,
  tasks: Task[],
}
