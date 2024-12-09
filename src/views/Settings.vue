<script setup lang="ts">
import CheckboxButton from '../components/setting/buttons/CheckboxButton.vue';
import NumberField from '../components/setting/NumberField.vue';
import SettingItem from '../components/setting/SettingItem.vue';
import SettingSection from '../components/setting/SettingSection.vue';
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

    <!-- long breaks -->
    <SettingSection label="Long Breaks">
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

    <!-- options -->
    <SettingSection label="Options">
      <SettingItem>
        <template #text>
          Time to prepare for a break (in seconds)
        </template>

        <template #button>
          <NumberField
            :default-value="10"
            :max="120"
            :step="5"
            @update="(newVal) => console.log(newVal)"
          />
        </template>
      </SettingItem>

      <SettingItem>
        <template #text>
          Strict break (No way to skip breaks)
        </template>

        <template #button>
          <CheckboxButton
            :model-value="false"
          />
        </template>
      </SettingItem>

      <SettingItem>
        <template #text>
          Allow postponing breaks
        </template>

        <template #button>
          <CheckboxButton
            :model-value="false"
          />
        </template>
      </SettingItem>

      <SettingItem>
        <template #text>
          Postpone duration (in minutes)
        </template>

        <template #button>
          <NumberField
            :default-value="5"
            :max="120"
            :step="5"
            disabled
            @update="(newVal) => console.log(newVal)"
          />
        </template>
      </SettingItem>
    </SettingSection>
  </div>
</template>
