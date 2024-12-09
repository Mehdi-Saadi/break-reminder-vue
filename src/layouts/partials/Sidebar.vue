<script setup lang="ts">
import AdvancedButton from '../../components/sidebar/buttons/AdvancedButton.vue';
import BreakMessagesButton from '../../components/sidebar/buttons/BreakMessagesButton.vue';
import SettingsButton from '../../components/sidebar/buttons/SettingsButton.vue';

</script>

<template>
  <div class="h-full w-1/3 fixed top-0 start-0 bg-inherit p-5 space-y-1">
    <SettingsButton />
    <BreakMessagesButton />
    <AdvancedButton />
  </div>
</template>
