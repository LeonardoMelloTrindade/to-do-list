import { type Task } from './Task';

export interface Category {
  id: string,
  name: string,
  image?: string,
  groupId: string,
  alltasks: string,
  alltasksFinished: string,
  tasks: Task[],
}
