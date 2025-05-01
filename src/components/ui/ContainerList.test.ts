import { describe, expect, it } from 'vitest';
import { customMount } from '@/tests/utils/index';
import ContainerList from './ContainerList.vue';
import { mockTasks, mockCategories, mockGroups } from '@/tests/mocks';

describe('ContainerList.vue', () => {
  it('should render ContainerList with prop Categories', () => {

    const wrapper = customMount(ContainerList, {
      props: {
        tab: 'Categorias',
        tasks: mockTasks,
        category: mockCategories,
      },
  
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('should render ContainerList with prop Groups', () => {
    const wrapper = customMount(ContainerList, {
      props: {
        tab: 'Grupos',
        tasks: mockTasks,
        group: mockGroups,
      },
  
    });
    expect(wrapper.exists()).toBe(true);
  });
});
