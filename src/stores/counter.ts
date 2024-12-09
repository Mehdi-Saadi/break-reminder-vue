import { defineStore } from 'pinia';
import { ref } from 'vue';

const useCounterStore = defineStore('counter', () => {
  const counter = ref<number>(0);

  const increaseCounter = (): void => {
    counter.value++;
  };

  const decreaseCounter = (): void => {
    counter.value--;
  };

  return {
    counter,
    increaseCounter,
    decreaseCounter,
  };
});

export default useCounterStore;
