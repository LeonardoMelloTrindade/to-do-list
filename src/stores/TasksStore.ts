import { type Task } from '../interfaces/Task';
import { defineStore } from 'pinia';

export const useTaskStore = defineStore('task', {
  state() {
    return {
      task: [] as Task[],
    };
  },
});
