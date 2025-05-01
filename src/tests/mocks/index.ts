import type { Task } from '@/interfaces/Task';
import type { Category } from '@/interfaces/Category';
import type { Group } from '@/interfaces/Group';

export const mockTasks: Task[] = [
  {
    id: '1',
    name: 'Caminhar',
    groupId: '1',
    categoryId: '1',
    description: 'Caminhar na praia',
    timePeriod: 'AS 15',
    status: 'A Fazer',
    priority: 1,
  },
];

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Cálculo I',
    groupId: '1',
    image: '',
    alltasks: '5',
    alltasksFinished: '1',
    tasks: mockTasks,
  },
];

export const mockGroups: Group[] = [
  {
    id: '1',
    name: 'Faculdade',
    image: '',
    alltasks: '10',
    alltasksFinished: '5',
    categories: mockCategories,
    tasks: mockTasks,
  },
];
