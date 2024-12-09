<script setup lang="ts">
import NumberField from '../components/setting/NumberField.vue';
import SettingSection from '../components/setting/SettingSection.vue';
</script>

<template>
  <div class="flex flex-col">
    <SettingSection label="Short Breaks">
      <div class="flex items-center justify-between">
        <span>Interval between two breaks (in minutes)</span>
        <NumberField
          :default-value="20"
          :max="120"
          :step="5"
          @update="(newVal) => console.log(newVal)"
        />
      </div>
    </SettingSection>
  </div>
</template>
