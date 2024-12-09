<script setup lang="ts">
const value = defineModel<boolean>({ required: true });
</script>

<template>
  <input
    v-model="value"
    class="size-4 cursor-pointer"
    type="checkbox"
  />
</template>
