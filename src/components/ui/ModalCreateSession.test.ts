import { expect, describe, it } from 'vitest';
import { customMount } from '@/tests/utils';
import ModalCreateSession from './ModalCreateSession.vue';

describe.only('ModalCreateSession.vue', () => {
  it('should render ModalCreateSession', () => {
    const wrapper = customMount(ModalCreateSession);

    expect(wrapper.exists()).toBe(true);
  });
});