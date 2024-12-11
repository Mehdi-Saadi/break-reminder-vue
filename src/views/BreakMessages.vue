<script setup lang="ts">
import DeleteButton from '@/components/ui/buttons/DeleteButton.vue';
import SettingItem from '@/components/setting/SettingItem.vue';
import SettingSection from '@/components/setting/SettingSection.vue';
import useSettingStore from '@/stores/setting.ts';
import { UUID } from '@/types/general';

const useSetting = useSettingStore();
const { updateBreakMessageById, deleteBreakMessageById } = useSetting;
</script>

<template>
  <div class="flex flex-col space-y-4">
    <!-- short breaks -->
    <SettingSection label="Short Breaks">
      <SettingItem
        v-for="(value, id) in useSetting.shortBreakMessages"
        :key="id"
        class="pb-3"
      >
        <template #text>
          <input
            :value="value"
            class="bg-inherit w-full px-1 outline-gray-300"
            type="text"
            @input="event => updateBreakMessageById(id as UUID, (event.target as HTMLInputElement).value)"
          />
        </template>

        <template #button>
          <DeleteButton @click="deleteBreakMessageById(id as UUID)" />
        </template>
      </SettingItem>
    </SettingSection>

    <!-- long breaks -->
    <SettingSection label="Long Breaks">
      <SettingItem
        v-for="(value, id) in useSetting.longBreakMessages"
        :key="id"
        class="pb-3"
      >
        <template #text>
          <input
            :value="value"
            class="bg-inherit w-full px-1 outline-gray-300"
            type="text"
            @input="event => updateBreakMessageById(id as UUID, (event.target as HTMLInputElement).value)"
          />
        </template>

        <template #button>
          <DeleteButton @click="deleteBreakMessageById(id as UUID)" />
        </template>
      </SettingItem>
    </SettingSection>
  </div>
</template>
