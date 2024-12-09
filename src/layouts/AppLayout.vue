<script setup lang="ts">
import Sidebar from './partials/Sidebar.vue';

</script>

<template>
  <div class="h-screen w-screen grid grid-cols-3 bg-[#f3f3f3] text-gray-800 dark:bg-[#202020] dark:text-white select-none">
    <div class="col-span-1">
      <Sidebar />
    </div>

    <div class="col-span-2 py-6 ps-3 pe-7">
      <RouterView />
    </div>
  </div>
</template>
