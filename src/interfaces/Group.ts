import { type Category } from './Category';
import { type Task } from './Task';

export interface Group {
  id: string
  name: string,
  image?: string,
  alltasks: string,
  alltasksFinished: string,
  categories: Category[],
  tasks: Task[],
}
