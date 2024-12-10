import  { type Category } from '../interfaces/Category';
import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('category', {
  state: () => ({
      categories: [] as Category[],
  }),
});
