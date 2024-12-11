<script setup lang="ts">
import CheckboxButton from '@/components/ui/buttons/CheckboxButton.vue';
import NumberField from '@/components/setting/NumberField.vue';
import SettingItem from '@/components/setting/SettingItem.vue';
import SettingSection from '@/components/setting/SettingSection.vue';
import useSettingStore from '@/stores/setting.ts';

const useSetting = useSettingStore();
</script>

<template>
  <div class="flex flex-col space-y-4">
    <!-- short breaks -->
    <SettingSection label="Short Breaks">
      <SettingItem>
        <template #text>
          Interval between two breaks (in minutes)
        </template>

        <template #button>
          <NumberField
            :default-value="useSetting.shortBreak.intervalBetweenTwoBreaks"
            :max="120"
            :step="5"
            @update="newVal => useSetting.shortBreak.intervalBetweenTwoBreaks = newVal"
          />
        </template>
      </SettingItem>

      <SettingItem>
        <template #text>
          Break duration (in seconds)
        </template>

        <template #button>
          <NumberField
            :default-value="useSetting.shortBreak.breakDuration"
            :max="120"
            :step="5"
            @update="newVal => useSetting.shortBreak.breakDuration = newVal"
          />
        </template>
      </SettingItem>
    </SettingSection>

    <!-- long breaks -->
    <SettingSection label="Long Breaks">
      <SettingItem>
        <template #text>
          Interval between two breaks (in minutes)
        </template>

        <template #button>
          <NumberField
            :default-value="useSetting.longBreak.intervalBetweenTwoBreaks"
            :max="120"
            :step="useSetting.shortBreak.intervalBetweenTwoBreaks"
            @update="newVal => useSetting.longBreak.intervalBetweenTwoBreaks = newVal"
          />
        </template>
      </SettingItem>

      <SettingItem>
        <template #text>
          Break duration (in seconds)
        </template>

        <template #button>
          <NumberField
            :default-value="useSetting.longBreak.breakDuration"
            :max="120"
            :step="5"
            @update="newVal => useSetting.longBreak.breakDuration = newVal"
          />
        </template>
      </SettingItem>
    </SettingSection>

    <!-- options -->
    <SettingSection label="Options">
      <SettingItem>
        <template #text>
          Time to prepare for a break (in seconds)
        </template>

        <template #button>
          <NumberField
            :default-value="useSetting.options.timeToPrepareForBreak"
            :max="120"
            :step="5"
            @update="newVal => useSetting.options.timeToPrepareForBreak = newVal"
          />
        </template>
      </SettingItem>

      <SettingItem>
        <template #text>
          Strict break (No way to skip breaks)
        </template>

        <template #button>
          <CheckboxButton v-model="useSetting.options.strictBreak" />
        </template>
      </SettingItem>

      <SettingItem>
        <template #text>
          Allow postponing breaks
        </template>

        <template #button>
          <CheckboxButton v-model="useSetting.options.allowPostponingBreaks" />
        </template>
      </SettingItem>

      <SettingItem>
        <template #text>
          Postpone duration (in minutes)
        </template>

        <template #button>
          <NumberField
            :default-value="useSetting.options.postponeDuration"
            :max="120"
            :step="5"
            disabled
            @update="newVal => useSetting.options.postponeDuration = newVal"
          />
        </template>
      </SettingItem>
    </SettingSection>
  </div>
</template>
