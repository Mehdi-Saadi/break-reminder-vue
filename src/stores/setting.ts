import { UUID } from '@/types/general';
import { IAdvancedSettings, BreakMessages, IBreakSettings, ISettingOptions } from '@/types/settings';
import { loadMessages, saveMessages } from '@/utils/message.ts';
import { loadSettings, saveSettings } from '@/utils/setting';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

// short break
const defaultShortBreakSettings: Readonly<IBreakSettings> = Object.freeze({
  intervalBetweenTwoBreaks: 20,
  breakDuration: 20,
});

const loadShortBreakSettings = (): IBreakSettings =>
  loadSettings('shortBreak', defaultShortBreakSettings);

const saveShortBreakSettings = (settings: IBreakSettings): void =>
  saveSettings('shortBreak', settings);


// long break
const defaultLongBreakSettings: Readonly<IBreakSettings> = Object.freeze({
  intervalBetweenTwoBreaks: defaultShortBreakSettings.intervalBetweenTwoBreaks * 3,
  breakDuration: defaultShortBreakSettings.breakDuration * 6,
});

const loadLongBreakSettings = (): IBreakSettings =>
  loadSettings('longBreak', defaultLongBreakSettings);

const saveLongBreakSettings = (settings: IBreakSettings): void =>
  saveSettings('longBreak', settings);


// options
const defaultSettingOptions: Readonly<ISettingOptions> = Object.freeze({
  timeToPrepareForBreak: 10,
  strictBreak: false,
  allowPostponingBreaks: false,
  postponeDuration: 5,
});

const loadSettingOptions = (): ISettingOptions =>
  loadSettings('options', defaultSettingOptions);

const saveSettingOptions = (settings: ISettingOptions): void =>
  saveSettings('options', settings);


// break messages
const defaultShortBreakMessages: Readonly<BreakMessages> = Object.freeze({
  '88027327-d0a0-42c3-a990-363e865d49e3': 'Tightly close your eyes',
  'db36bc4b-6d4f-42d2-a10f-f31f8fd8fe8d': 'Roll your eyes a few times to each side',
  '60981702-125f-411b-ac70-98fc6b7a5c8c': 'Rotate your eyes in clockwise direction',
  'a1416a32-977d-4035-832b-30245bb9444b': 'Rotate your eyes in counterclockwise direction',
  '6d18d092-2f49-4e16-99b0-f95538f6c479': 'Blink your eyes',
  '141dfbfc-6f24-4fac-84ab-0835b0f11584': 'Focus on a point in the far distance',
  '707748c5-4629-47f8-9ed7-e94db77632e9': 'Have some water',
});

const loadShortBreakMessages = (): BreakMessages =>
  loadMessages('shortBreakMessages', defaultShortBreakMessages);

const saveShortBreakMessages = (messages: BreakMessages): void =>
  saveMessages('shortBreakMessages', messages);

const defaultLongBreakMessages: Readonly<BreakMessages> = Object.freeze({
  'b077fa44-9219-4bfc-a665-2e3a87a95727': 'Walk for a while',
  'aa88fa9a-51a3-40a7-b8a3-35a7bdf247d0': 'Lean back at your seat and relax',
});

const loadLongBreakMessages = (): BreakMessages =>
  loadMessages('longBreakMessages', defaultLongBreakMessages);

const saveLongBreakMessages = (messages: BreakMessages): void =>
  saveMessages('longBreakMessages', messages);


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
  loadSettings('advanced', defaultAdvancedSettings);

const saveAdvancedSettings = (settings: IAdvancedSettings): void =>
  saveSettings('advanced', settings);


const useSettingStore = defineStore('setting', () => {
  const shortBreak = ref<IBreakSettings>(loadShortBreakSettings());
  const longBreak = ref<IBreakSettings>(loadLongBreakSettings());
  const options = ref<ISettingOptions>(loadSettingOptions());
  const shortBreakMessages = ref<BreakMessages>(loadShortBreakMessages());
  const longBreakMessages = ref<BreakMessages>(loadLongBreakMessages());
  const advanced = ref<IAdvancedSettings>(loadAdvancedSettings());

  const deleteBreakMessageById = (id: UUID): void => {
    delete shortBreakMessages.value[id];
    delete longBreakMessages.value[id];
  };

  const resetSettingsToDefault = (): void => {
    shortBreak.value = {...defaultShortBreakSettings};
    longBreak.value = {...defaultLongBreakSettings};
    options.value = {...defaultSettingOptions};
    shortBreakMessages.value = {...defaultShortBreakMessages};
    longBreakMessages.value = {...defaultLongBreakMessages};
    advanced.value = {...defaultAdvancedSettings};
  };

  // save changes to local storage
  watch(shortBreak, () => saveShortBreakSettings(shortBreak.value));
  watch(longBreak, () => saveLongBreakSettings(longBreak.value));
  watch(options, () => saveSettingOptions(options.value));
  watch(shortBreakMessages, () => saveShortBreakMessages(shortBreakMessages.value));
  watch(longBreakMessages, () => saveLongBreakMessages(longBreakMessages.value));
  watch(advanced, () => saveAdvancedSettings(advanced.value));

  return {
    shortBreak,
    longBreak,
    options,
    shortBreakMessages,
    longBreakMessages,
    advanced,
    deleteBreakMessageById,
    resetSettingsToDefault,
  };
});

export default useSettingStore;
