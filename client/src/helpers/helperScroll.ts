import { nextTick } from 'vue';
import type { Ref } from 'vue';

export const scrollBottom = async (container: Ref<HTMLElement | null>) => {
  await nextTick(() => {
    if (container.value) {
      container.value.scrollTop = container.value.scrollHeight;
    }
  });
};
