import { IAdvancedSettings, IBreakSettings, ISettingOptions } from '@/types/settings';
import { loadSettings, saveSettings, storageKeys } from '@/utils/setting';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

// short break
const defaultShortBreakSettings: Readonly<IBreakSettings> = Object.freeze({
  intervalBetweenTwoBreaks: 20,
  breakDuration: 20,
});

const loadShortBreakSettings = (): IBreakSettings =>
  loadSettings(storageKeys.shortBreak, defaultShortBreakSettings);

const saveShortBreakSettings = (settings: IBreakSettings): void =>
  saveSettings(storageKeys.shortBreak, settings);


// long break
const defaultLongBreakSettings: Readonly<IBreakSettings> = Object.freeze({
  intervalBetweenTwoBreaks: defaultShortBreakSettings.intervalBetweenTwoBreaks * 3,
  breakDuration: defaultShortBreakSettings.breakDuration * 6,
});

const loadLongBreakSettings = (): IBreakSettings =>
  loadSettings(storageKeys.longBreak, defaultLongBreakSettings);

const saveLongBreakSettings = (settings: IBreakSettings): void =>
  saveSettings(storageKeys.longBreak, settings);


// options
const defaultSettingOptions: Readonly<ISettingOptions> = Object.freeze({
  timeToPrepareForBreak: 10,
  strictBreak: false,
  allowPostponingBreaks: false,
  postponeDuration: 5,
});

const loadSettingOptions = (): ISettingOptions =>
  loadSettings(storageKeys.options, defaultSettingOptions);

const saveSettingOptions = (settings: ISettingOptions): void =>
  saveSettings(storageKeys.options, settings);


// advanced
const defaultAdvancedSettings: Readonly<IAdvancedSettings> = Object.freeze({
  doNotDisturb: true,
  notification: true,
  audibleAlert: true,
  selectedAudio: '',
  smartPause: true,
  screensaver: true,
  darkMode: false,
});

const loadAdvancedSettings = (): IAdvancedSettings =>
  loadSettings(storageKeys.advanced, defaultAdvancedSettings);

const saveAdvancedSettings = (settings: IAdvancedSettings): void =>
  saveSettings(storageKeys.advanced, settings);


const useSettingStore = defineStore('setting', () => {
  const shortBreak = ref<IBreakSettings>(loadShortBreakSettings());
  const longBreak = ref<IBreakSettings>(loadLongBreakSettings());
  const options = ref<ISettingOptions>(loadSettingOptions());
  const advanced = ref<IAdvancedSettings>(loadAdvancedSettings());


  const resetSettingsToDefault = (): void => {
    shortBreak.value = {...defaultShortBreakSettings};
    longBreak.value = {...defaultLongBreakSettings};
    options.value = {...defaultSettingOptions};
    advanced.value = {...defaultAdvancedSettings};
  };

  // save changes to local storage
  watch(shortBreak, () => saveShortBreakSettings(shortBreak.value));
  watch(longBreak, () => saveLongBreakSettings(longBreak.value));
  watch(options, () => saveSettingOptions(options.value));
  watch(advanced, () => saveAdvancedSettings(advanced.value));

  return {
    shortBreak,
    longBreak,
    options,
    advanced,
    resetSettingsToDefault,
  };
});

export default useSettingStore;
