import { describe, expect, it } from 'vitest';
import { customMount } from '@/tests/utils';
import NavContainerList from './NavContainerList.vue';

describe('NavContainerList.vue', () => {
  it ('should render NavContainerList', () => {
    const wrapper = customMount(NavContainerList);

    expect(wrapper.exists()).toBe(true);
  });

  it ('should render NavContainerList with props', () => {
    const wrapper = customMount(NavContainerList, {
      props: {
        tab: 'Grupos',
      },
    });

    const navigation = wrapper.find('.navigation');
    expect(navigation.exists()).toBe(true);
    expect(navigation.text()).toContain('Grupos');
  });

  it('should render NavContainerList click in nav Session button', () => {
    const wrapper = customMount(NavContainerList, {
      props: {
        tab: 'Categorias',
      },
    });

    const sessionButton = wrapper.find('.nav-container-list__session-btn');
    expect(sessionButton.classes()).toContain('p-tab-active');
  });

  it('should render NavContainerList click in nav Task button', async () => {
    const wrapper = customMount(NavContainerList, {
      props: {
        tab: 'Grupos',
      },
    });

    const taskButton = wrapper.find('.nav-container-list__task-btn');
    expect(taskButton.classes()).not.toContain('p-tab-active');
    
    await taskButton.trigger('click');
    expect(taskButton.classes()).toContain('p-tab-active');
  });
});