<script setup lang="ts">
import Sidebar from './partials/Sidebar.vue';

</script>

<template>
  <div class="h-screen w-screen grid grid-cols-3 bg-[#f3f3f3] dark:bg-[#202020]">
    <div class="col-span-1">
      <Sidebar />
    </div>

    <div class="col-span-2">
      <RouterView />
    </div>
  </div>
</template>
