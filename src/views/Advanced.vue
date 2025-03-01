<script setup lang="ts">
import CheckboxButton from '@/components/ui/buttons/CheckboxButton.vue';
import DarkModeIcon from '@/components/ui/icons/DarkModeIcon.vue';
import DoNotDisturbOnIcon from '@/components/ui/icons/DoNotDisturbOnIcon.vue';
import LockIcon from '@/components/ui/icons/LockIcon.vue';
import MusicNoteIcon from '@/components/ui/icons/MusicNoteIcon.vue';
import NetworkIntelligenceIcon from '@/components/ui/icons/NetworkIntelligenceIcon.vue';
import NotificationsIcon from '@/components/ui/icons/NotificationsIcon.vue';
import SettingItem from '@/components/setting/SettingItem.vue';
import useSettingStore from '@/stores/setting.ts';

const useSetting = useSettingStore();
</script>

<template>
  <div class="flex flex-col space-y-5 p-4 text-sm">
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
        <CheckboxButton v-model="useSetting.advanced.doNotDisturb" />
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
        <CheckboxButton v-model="useSetting.advanced.notification" />
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
        <CheckboxButton v-model="useSetting.advanced.audibleAlert" />
      </template>
    </SettingItem>

    <SettingItem>
      <template #text>
        <div class="flex items-center space-x-1">
          <!-- icon -->
          <NetworkIntelligenceIcon class="size-5" />

          <!-- text -->
          <div class="flex flex-col">
            <div class="font-semibold">Smart Pause</div>
            <div class="text-xs text-[#5c5c5c] dark:text-[#cccccc]">Pause reminder if system is idle</div>
          </div>
        </div>
      </template>

      <template #button>
        <CheckboxButton v-model="useSetting.advanced.smartPause" />
      </template>
    </SettingItem>

    <SettingItem>
      <template #text>
        <div class="flex items-center space-x-1">
          <!-- icon -->
          <LockIcon class="size-5" />

          <!-- text -->
          <div class="flex flex-col">
            <div class="font-semibold">Screensaver</div>
            <div class="text-xs text-[#5c5c5c] dark:text-[#cccccc]">Lock the screen after long breaks by starting screensaver</div>
          </div>
        </div>
      </template>

      <template #button>
        <CheckboxButton v-model="useSetting.advanced.screensaver" />
      </template>
    </SettingItem>

    <SettingItem>
      <template #text>
        <div class="flex items-center space-x-1">
          <!-- icon -->
          <DarkModeIcon class="size-5" />

          <!-- text -->
          <div class="font-semibold">Dark Mode</div>
        </div>
      </template>

      <template #button>
        <CheckboxButton v-model="useSetting.advanced.darkMode" />
      </template>
    </SettingItem>
  </div>
</template>
