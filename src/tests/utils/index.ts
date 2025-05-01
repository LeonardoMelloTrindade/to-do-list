import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import type { Component } from 'vue';


export const customMount = (component: Component, options) => {
  return mount(component, {
    ...options,
    global: {
      plugins: [createTestingPinia()],
      ...options?.global,
    },
  });
};