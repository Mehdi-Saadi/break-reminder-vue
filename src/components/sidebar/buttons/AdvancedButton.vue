<script setup lang="ts">
import Button from '@/components/sidebar/buttons/Button.vue';
import DoubleArrowRightIcon from '@/components/ui/icons/DoubleArrowRightIcon.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <Button
    :active="router.currentRoute.value.name === 'advanced'"
    :to="{ name: 'advanced' }"
  >
    <DoubleArrowRightIcon class="size-5 me-1.5" />
    <span class="pb-0.5">Advanced</span>
  </Button>
</template>
