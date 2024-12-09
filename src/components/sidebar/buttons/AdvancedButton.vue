<script setup lang="ts">
import Button from './Button.vue';
import DoubleArrowRightIcon from '../../icons/DoubleArrowRightIcon.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <Button
    :active="router.currentRoute.value.name === 'advanced'"
    :to="{ name: 'advanced' }"
  >
    <DoubleArrowRightIcon class="size-5 me-1.5" />
    <span>Advanced</span>
  </Button>
</template>
