import { type Task } from './../interfaces/Task';
import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('category', {
  state: () => ({
      categories: [] as {
        id: number,
        groupId: string,
        tasks: Task[],
        image?: string
      }[],
  }),
});
