<script setup lang="ts">
import CheckboxButton from '@/components/ui/buttons/CheckboxButton.vue';
import SettingItem from '@/components/setting/SettingItem.vue';
</script>

<template>
  <div class="flex flex-col space-y-3 p-4 text-sm">
    <SettingItem>
      <template #text>
        Do Not Disturb
      </template>

      <template #button>
        <CheckboxButton :model-value="true" />
      </template>
    </SettingItem>
    <SettingItem>
      <template #text>
        Notification
      </template>

      <template #button>
        <CheckboxButton :model-value="true" />
      </template>
    </SettingItem>
    <SettingItem>
      <template #text>
        Audible Alert
      </template>

      <template #button>
        <CheckboxButton :model-value="true" />
      </template>
    </SettingItem>
    <SettingItem>
      <template #text>
        Smart Pause
      </template>

      <template #button>
        <CheckboxButton :model-value="true" />
      </template>
    </SettingItem>
    <SettingItem>
      <template #text>
        Screen saver
      </template>

      <template #button>
        <CheckboxButton :model-value="true" />
      </template>
    </SettingItem>
  </div>
</template>
