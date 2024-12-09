<script setup lang="ts">
import Button from './Button.vue';
import ChatBubbleIcon from '../../icons/ChatBubbleIcon.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <Button
    :active="router.currentRoute.value.name === 'break.messages'"
    :to="{ name: 'break.messages' }"
  >
    <ChatBubbleIcon class="size-5 me-1.5" />
    <span>Break Messages</span>
  </Button>
</template>
