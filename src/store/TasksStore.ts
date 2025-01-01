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
    createTask(name: string, priority:  Task['priority'], description?: string) {
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

    deleteTasks(id: string) {
      const index = this.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    },
  },
});
