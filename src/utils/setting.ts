import { IAdvancedSettings, IBreakSettings, ISettingOptions } from '@/types/settings';

const storageKeys = Object.freeze({
  shortBreak: 'shortBreak',
  longBreak: 'longBreak',
  options: 'options',
  advanced: 'advanced',
});

const loadSettings = <T extends object>(storageKey: string, defaultSettings: Readonly<T>): T => {
  const localData = localStorage.getItem(storageKey);

  if (!localData) {
    return {...defaultSettings};
  }

  try {
    const parsedData = JSON.parse(localData);

    for (const key in parsedData) {
      if (!(key in defaultSettings)) {
        return {...defaultSettings};
      }
    }

    return {...defaultSettings, ...parsedData};
  } catch {
    return {...defaultSettings};
  }
};

// short break
const defaultShortBreakSettings: Readonly<IBreakSettings> = Object.freeze({
  intervalBetweenTwoBreaks: 20,
  breakDuration: 20,
});
export const loadShortBreakSettings = (): IBreakSettings =>
  loadSettings(storageKeys.shortBreak, defaultShortBreakSettings);

// long break
const defaultLongBreakSettings: Readonly<IBreakSettings> = Object.freeze({
  intervalBetweenTwoBreaks: defaultShortBreakSettings.intervalBetweenTwoBreaks * 3,
  breakDuration: defaultShortBreakSettings.breakDuration * 6,
});
export const loadLongBreakSettings = (): IBreakSettings =>
  loadSettings(storageKeys.longBreak, defaultLongBreakSettings);

// options
const defaultSettingOptions: Readonly<ISettingOptions> = Object.freeze({
  timeToPrepareForBreak: 10,
  strictBreak: false,
  allowPostponingBreaks: false,
  postponeDuration: 5,
});
export const loadSettingOptions = (): ISettingOptions =>
  loadSettings(storageKeys.options, defaultSettingOptions);

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
export const loadAdvancedSettings = (): IAdvancedSettings =>
  loadSettings(storageKeys.advanced, defaultAdvancedSettings);
