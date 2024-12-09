<script setup lang="ts">
import AddButton from './buttons/AddButton.vue';
import RemoveButton from './buttons/RemoveButton.vue';
import { ref, watch } from 'vue';

const props = defineProps<{
  defaultValue: number;
  max: number;
  step: number;
}>();

const emit = defineEmits(['update']);

const value = ref<number>(props.defaultValue);

const onInput = (event: Event): void => {
  const target = event.target as HTMLInputElement;

  target.value = target.value.replace(/\D/g, '');

  if (Number(target.value) > props.max) {
    target.value = target.value.slice(0, target.value.length - 1);
  }

  value.value = Number(target.value);
};

const increase = (): void => {
  value.value = value.value + props.step;
};

const decrease = (): void => {
  value.value = value.value - props.step;

  if (value.value < 0) {
    value.value = 0;
  }
};

watch(value, () => emit('update', value.value));
</script>

<template>
  <div class="flex items-center border border-gray-300 rounded-md overflow-hidden">
    <input
      v-model="value"
      class="h-6 w-9 focus:outline-0 px-1 bg-inherit border-e border-gray-300"
      type="text"
      @input="onInput"
    />
    <RemoveButton
      class="border-e border-gray-300"
      @click="decrease"
    />
    <AddButton @click="increase" />
  </div>
</template>
