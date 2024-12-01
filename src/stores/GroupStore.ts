import { type Session } from './../interfaces/Session';
import { type Task } from './../interfaces/Task';
import { defineStore } from 'pinia';

export const useGroupStore = defineStore('task', {
  state: () => {
    return {
      groups: [] as {
        id: string,
        name: string,
        image?: string,
        categories: Session[]
        tasks: Task[],
      }[],
    };
  },
});
