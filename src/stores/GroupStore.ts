import { type Group } from '../interfaces/Group';
import { defineStore } from 'pinia';

export const useGroupStore = defineStore('group', {
  state: () => {
    return {
      groups: [] as Group[],
    };
  },
});
