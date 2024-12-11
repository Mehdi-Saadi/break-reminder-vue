<script setup lang="ts">
import DeleteButton from '@/components/ui/buttons/DeleteButton.vue';
import SettingItem from '@/components/setting/SettingItem.vue';
import SettingSection from '@/components/setting/SettingSection.vue';
</script>

<template>
  <div class="flex flex-col space-y-4">
    <!-- short breaks -->
    <SettingSection label="Short Breaks">
      <SettingItem>
        <template #text>
          Tightly close your eyes
        </template>

        <template #button>
          <DeleteButton />
        </template>
      </SettingItem>
    </SettingSection>

    <!-- long breaks -->
    <SettingSection label="Long Breaks">
      <SettingItem>
        <template #text>
          Walk for a while
        </template>

        <template #button>
          <DeleteButton />
        </template>
      </SettingItem>
    </SettingSection>
  </div>
</template>
