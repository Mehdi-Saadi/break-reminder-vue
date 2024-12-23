<script setup lang="ts">
import Sidebar from '@/layouts/partials/Sidebar.vue';
import useSettingStore from '@/stores/setting.ts';

const useSetting = useSettingStore();
</script>

<template>
  <div
    :class="{ 'dark': useSetting.advanced.darkMode }"
    class="size-full min-h-screen grid grid-cols-3 bg-[#f3f3f3] text-gray-800 dark:bg-[#202020] dark:text-white select-none"
  >
    <div class="col-span-1">
      <Sidebar />
    </div>

    <div class="col-span-2 py-6 ps-3 pe-7">
      <RouterView />
    </div>
  </div>
</template>
