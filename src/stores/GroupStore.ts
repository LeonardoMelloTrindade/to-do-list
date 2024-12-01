import { type Category } from '../interfaces/Category';
import { type Task } from './../interfaces/Task';
import { defineStore } from 'pinia';

export const useGroupStore = defineStore('task', {
  state: () => {
    return {
      groups: [] as {
        id: string,
        name: string,
        image?: string,
        categories: Category[]
        tasks: Task[],
      }[],
    };
  },
});
