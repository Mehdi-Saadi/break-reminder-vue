<script setup lang="ts">
import NumberField from '../components/setting/NumberField.vue';
import SettingItem from '../components/setting/SettingItem.vue';
import SettingSection from '../components/setting/SettingSection.vue';
</script>

<template>
  <div class="flex flex-col">
    <SettingSection label="Short Breaks">
      <SettingItem>
        <template #text>
          Interval between two breaks (in minutes)
        </template>

        <template #button>
          <NumberField
            :default-value="20"
            :max="120"
            :step="5"
            @update="(newVal) => console.log(newVal)"
          />
        </template>
      </SettingItem>

      <SettingItem>
        <template #text>
          Break duration (in seconds)
        </template>

        <template #button>
          <NumberField
            :default-value="20"
            :max="120"
            :step="5"
            @update="(newVal) => console.log(newVal)"
          />
        </template>
      </SettingItem>
    </SettingSection>
  </div>
</template>
