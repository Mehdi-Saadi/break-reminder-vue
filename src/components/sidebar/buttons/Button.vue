<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';

defineProps<{
  active: boolean
  to: RouteLocationRaw
}>();
</script>

<template>
  <RouterLink
    :class="[active ? 'bg-[#eaeaea] dark:bg-[#2d2d2d] hover:bg-[#ededed] hover:dark:bg-[#292929]' : 'hover:bg-[#eaeaea] hover:dark:bg-[#2d2d2d]']"
    :to="to"
    class="flex items-center pe-4 py-2 rounded-md text-sm"
  >
    <div
      v-show="active"
      class="min-w-0.5 min-h-4 max-w-0.5 max-h-4 bg-[#0067c0] rounded-full"
    />

    <div
      :class="[active ? 'ps-1' : 'ps-1.5']"
      class="flex items-center"
    >
      <slot />
    </div>
  </RouterLink>
</template>
