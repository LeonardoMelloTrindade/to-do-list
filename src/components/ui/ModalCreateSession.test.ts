import { expect, describe, it } from 'vitest';
import { customMount } from '@/tests/utils';
import ModalCreateSession from './ModalCreateSession.vue';

describe('ModalCreateSession.vue', () => {
  it('should render ModalCreateSession', () => {
    const wrapper = customMount(ModalCreateSession);

    expect(wrapper.exists()).toBe(true);
  });
});