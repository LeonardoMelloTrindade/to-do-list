import { type Task } from '../interfaces/Task';
import { defineStore } from 'pinia';
import { faker } from '@faker-js/faker';
import { todayDate } from '../functions/date';

export const useTaskStore = defineStore('tasks', {
  state() {
    return {
      tasks: [] as Task[],
    };
  },
  actions: {
    createTask(name: string, priority:  1 | 2 | 3 | 4 | 5, description?: string) {
      const task: Task = {
        id: faker.string.ulid(),
        name: name,
        groupId: faker.string.ulid(),
        categoryId: faker.string.ulid(),
        description: description || '',
        timePeriod: todayDate,
        status: 'A Fazer',
        priority: priority,
      };
      this.tasks.push(task);
    },
  },
});
