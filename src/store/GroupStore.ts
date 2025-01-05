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

    createCategoryForGroup(name: string, groupId: string | string[], image?: string) {
      const category: Category = {
        id: faker.string.ulid(), 
        name: name,
        image: image || '', 
        groupId: groupId,
        alltasks: '0', 
        alltasksFinished: '0', 
        tasks: [] as Task[], 
      };
    
      const group = this.groups.find(group => group.id === groupId);
      if (group) {
        group.categories.push(category); // Adiciona a nova categoria no array de categorias do grupo
    
      // Atualizando a lista de grupos
      this.groups = this.groups.map(group => 
        group.id === groupId ? { ...group, categories: [...group.categories, category] } : group);
        } else {
          throw new Error('Group not found');
      }
    },

    deleteGroup(id: string) {
      const index = this.groups.findIndex(group => group.id === id);
      if (index !== -1) {
        this.groups.splice(index, 1);
      }
    },

    findGroupById(id: string | string[]) {
      const group = this.groups.find(group => group.id === id);
      return group;
    },
  },

});
