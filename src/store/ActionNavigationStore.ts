import { defineStore } from 'pinia';

export const useActionNavigation = defineStore('actionNavigation', {
  state: () => ({
    isActiveTask: true,
  }),
  actions: {
    onClickTabSession() {
      this.isActiveTask = true;
    },
    onClickTabTask() {
      this.isActiveTask = false;
    },
  },
});
