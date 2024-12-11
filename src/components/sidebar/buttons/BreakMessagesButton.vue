<script setup lang="ts">
import Button from '@/components/sidebar/buttons/Button.vue';
import ChatBubbleIcon from '@/components/ui/icons/ChatBubbleIcon.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <Button
    :active="router.currentRoute.value.name === 'break.messages'"
    :to="{ name: 'break.messages' }"
  >
    <ChatBubbleIcon class="size-5 me-1.5" />
    <span class="pb-0.5">Break Messages</span>
  </Button>
</template>
