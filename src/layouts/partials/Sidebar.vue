<script setup lang="ts">
import AdvancedButton from '../../components/sidebar/buttons/AdvancedButton.vue';
import BreakMessagesButton from '../../components/sidebar/buttons/BreakMessagesButton.vue';
import SettingsButton from '../../components/sidebar/buttons/SettingsButton.vue';

</script>

<template>
  <div class="size-full bg-inherit p-5 space-y-1">
    <SettingsButton />
    <BreakMessagesButton />
    <AdvancedButton />
  </div>
</template>
