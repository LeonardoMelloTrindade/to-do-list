import { type Task } from './../interfaces/Task';
import { type Category } from './../interfaces/Category';
import { type Group } from '../interfaces/Group';
import { defineStore } from 'pinia';
import { faker } from '@faker-js/faker';

export const useGroupStore = defineStore('group', {
  state: () => {
    return {
      groups: [] as Group[],
    };
  },
  actions: {
    createGroup(name: string, image?: string) {
      const group: Group = {
        id: faker.string.ulid(),
        name: name,
        image: image || '',
        alltasks: '0',
        alltasksFinished: '0',
        categories: [] as Category[],
        tasks: [] as Task[],
      };
      this.groups.push(group);
    },
  },
});
