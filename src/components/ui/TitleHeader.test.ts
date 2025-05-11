import { describe, expect, it } from 'vitest';
import { customMount } from '@/tests/utils';
import TitleHeader from './TitleHeader.vue';

describe('TtitleHeader.vue', () => {
  it('should render TitleHeader', () => {
    const wrapper = customMount(TitleHeader);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render TitleHeader with prop', () => {
    const wrapper = customMount(TitleHeader, {
      props: {
        title: 'Tarefas',
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});