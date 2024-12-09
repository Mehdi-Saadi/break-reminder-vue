<script setup lang="ts">
import { useRouter } from 'vue-router';
import GearIcon from '../../icons/GearIcon.vue';
import Button from './Button.vue';

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
