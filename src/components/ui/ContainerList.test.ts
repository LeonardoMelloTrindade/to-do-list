import { describe, expect, it } from 'vitest';
import { customMount } from '@/tests/utils/index';
import ContainerList from './ContainerList.vue';

describe('ContainerList.vue', () => {
  it('should render ContainerList with prop Categories', () => {
    const wrapper = customMount(ContainerList, {
      props: {
        tab: 'Categorias',
        tasks: [],
        category: [],
      },
  
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('should render ContainerList with prop Groups', () => {
    const wrapper = customMount(ContainerList, {
      props: {
        tab: 'Grupos',
        tasks: [],
        group: [],
      },
  
    });
    expect(wrapper.exists()).toBe(true);
  });
});
