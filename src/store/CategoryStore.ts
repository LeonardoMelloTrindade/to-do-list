import  { type Category } from '../interfaces/Category';
import { type Task } from './../interfaces/Task';
import { defineStore } from 'pinia';
import { faker } from '@faker-js/faker';

export const useCategoryStore = defineStore('category', {
  state: () => ({
      categories: [] as Category[],
  }),
  actions: {
    createCategory(name: string, idGroup: string | string[], image?: string) {
      const category: Category = {
        id: faker.string.ulid(),
        name: name,
        image: image || '',
        groupId: idGroup,
        alltasks: '0',
        alltasksFinished: '0',
        tasks: [] as Task[],
      };
      this.categories.push(category);
    },
  },
});
