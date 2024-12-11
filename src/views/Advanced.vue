<script setup lang="ts">
import CheckboxButton from '@/components/ui/buttons/CheckboxButton.vue';
import DoNotDisturbOnIcon from '@/components/ui/icons/DoNotDisturbOnIcon.vue';
import SettingItem from '@/components/setting/SettingItem.vue';
import MusicNoteIcon from '@/components/ui/icons/MusicNoteIcon.vue';
import NotificationsIcon from '@/components/ui/icons/NotificationsIcon.vue';
</script>

<template>
  <div class="flex flex-col space-y-3 p-4 text-sm">
    <SettingItem>
      <template #text>
        <div class="flex items-center space-x-1">
          <!-- icon -->
          <DoNotDisturbOnIcon class="size-5" />

          <!-- text -->
          <div class="flex flex-col">
            <div class="font-semibold">Do Not Disturb</div>
            <div class="text-xs text-[#5c5c5c] dark:text-[#cccccc]">Skip the break if the active window is in fullscreen mode</div>
          </div>
        </div>
      </template>

      <template #button>
        <CheckboxButton :model-value="true" />
      </template>
    </SettingItem>
    <SettingItem>
      <template #text>
        <div class="flex items-center space-x-1">
          <!-- icon -->
          <NotificationsIcon class="size-5" />

          <!-- text -->
          <div class="flex flex-col">
            <div class="font-semibold">Notification</div>
            <div class="text-xs text-[#5c5c5c] dark:text-[#cccccc]">Show a system notification before breaks</div>
          </div>
        </div>
      </template>

      <template #button>
        <CheckboxButton :model-value="true" />
      </template>
    </SettingItem>
    <SettingItem>
      <template #text>
        <div class="flex items-center space-x-1">
          <!-- icon -->
          <MusicNoteIcon class="size-5" />

          <!-- text -->
          <div class="flex flex-col">
            <div class="font-semibold">Audible Alert</div>
            <div class="text-xs text-[#5c5c5c] dark:text-[#cccccc]">Play an audible alert at the end of breaks</div>
          </div>
        </div>
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
