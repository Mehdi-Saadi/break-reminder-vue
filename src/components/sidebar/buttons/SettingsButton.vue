<script setup lang="ts">
import Button from '@/components/sidebar/buttons/Button.vue';
import GearIcon from '@/components/ui/icons/GearIcon.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <Button
    :active="router.currentRoute.value.name === 'settings'"
    :to="{ name: 'settings' }"
  >
    <GearIcon class="size-5 me-1.5" />
    <span class="pb-0.5">Settings</span>
  </Button>
</template>
