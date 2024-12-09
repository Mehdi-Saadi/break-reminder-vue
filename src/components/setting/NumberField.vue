<script setup lang="ts">
import AddButton from './buttons/AddButton.vue';
import RemoveButton from './buttons/RemoveButton.vue';
</script>

<template>
  <div class="flex items-center border border-gray-300 rounded-md overflow-hidden">
    <input
      class="h-6 w-9 focus:outline-0 px-1 bg-inherit border-e border-gray-300"
      type="text"
    />
    <RemoveButton class="border-e border-gray-300" />
    <AddButton />
  </div>
</template>
