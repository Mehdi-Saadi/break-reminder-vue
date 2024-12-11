<script setup lang="ts">
withDefaults(
  defineProps<{
    textPadding?: boolean;
  }>(), {
    textPadding: true,
  }
);
</script>

<template>
  <div class="flex items-center justify-between">
    <div :class="{'pb-0.5': textPadding}">
      <slot name="text" />
    </div>

    <slot name="button" />
  </div>
</template>
