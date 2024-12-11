<script lang="ts" setup>
import { Instance, type PositioningStrategy } from '@popperjs/core/lib/types';
import { type Placement } from '@popperjs/core/lib/enums';
import { createPopper } from '@popperjs/core';
import { onMounted, ref, useTemplateRef } from 'vue';

const props = withDefaults(
  defineProps<{
    strategy?: PositioningStrategy;
    placement?: Placement;
    menuClasses?: string;
    isOpenable?: boolean;
  }>(),
  {
    strategy: 'fixed',
    placement: 'bottom',
    isOpenable: true,
  }
);

const open = ref<boolean>(false);

const trigger = useTemplateRef<HTMLDivElement | null>('trigger');
const menu = useTemplateRef<HTMLDivElement | null>('menu');
let instance: Instance | null = null;

const showDropdown = (): void => {
  if (!props.isOpenable) {
    return;
  }

  open.value = true;
  document.addEventListener('keydown', closeOnEscape);

  enablePopperEventListeners();
  instance?.update();
};

const hideDropdown = (): void => {
  open.value = false;
  document.removeEventListener('keydown', closeOnEscape);

  disablePopperEventListeners();
};

const closeOnEscape = (e: KeyboardEvent): void => {
  if (open.value && e.key === 'Escape') {
    hideDropdown();
  }
};

const enablePopperEventListeners = (): void => {
  instance?.setOptions({
    modifiers: [
      {
        name: 'eventListeners',
        enabled: true,
      },
      {
        name: 'offset',
        options: {
          offset: [0, 5],
        },
      },
    ],
  });
};

const disablePopperEventListeners = (): void => {
  instance?.setOptions({
    modifiers: [
      {
        name: 'eventListeners',
        enabled: false,
      },
    ],
  });
};

onMounted(() => {
  if (!trigger.value || !menu.value) {
    return;
  }

  instance = createPopper(trigger.value, menu.value, {
    strategy: props.strategy,
    placement: props.placement,
  });

  disablePopperEventListeners();
});
</script>

<template>
  <div>
    <div
      class="h-full flex items-center"
      ref="trigger"
      @click.stop="showDropdown"
    >
      <slot name="trigger" />
    </div>

    <!-- Full Screen Dropdown Overlay -->
    <div
      v-if="open"
      class="fixed inset-0 z-40"
      @click.stop="hideDropdown"
    />

    <div
      v-show="open"
      :class="menuClasses"
      class="z-50 text-sm rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white"
      ref="menu"
      @click="hideDropdown"
    >
      <div class="py-1">
        <slot
          v-if="open"
          name="content"
        />
      </div>
    </div>
  </div>
</template>
