<script setup lang="ts">
import Button from './Button.vue';
import GearIcon from '../../icons/GearIcon.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <Button
    :active="router.currentRoute.value.name === 'settings'"
    :to="{ name: 'settings' }"
  >
    <GearIcon class="size-5 me-1.5" />
    <span>Settings</span>
  </Button>
</template>
