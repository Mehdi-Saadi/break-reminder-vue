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
    return defaultSettings;
  }

  try {
    const parsedData = JSON.parse(localData);

    for (const key in parsedData) {
      if (!(key in defaultSettings)) {
        return defaultSettings;
      }
    }

    return {...defaultSettings, ...parsedData};
  } catch {
    return defaultSettings;
  }
};

// short break
const defaultShortBreakSettings: Readonly<IBreakSettings> = Object.freeze({
  intervalBetweenTwoBreaks: 20,
  breakDuration: 20,
});
export const loadShortBreakSettings = (): IBreakSettings => {
  const localData = localStorage.getItem(storageKeys.shortBreak);

  if (!localData) {
    return defaultShortBreakSettings;
  }

  const objLocalData = JSON.parse(localData);

  for (const key in defaultShortBreakSettings) {
    if (!(key in objLocalData)) {
      return defaultShortBreakSettings;
    }
  }

  return {
    intervalBetweenTwoBreaks: objLocalData.intervalBetweenTwoBreaks,
    breakDuration: objLocalData.breakDuration,
  };
};


// long break
const defaultLongBreakSettings: Readonly<IBreakSettings> = Object.freeze({
  intervalBetweenTwoBreaks: defaultShortBreakSettings.intervalBetweenTwoBreaks * 3,
  breakDuration: defaultShortBreakSettings.breakDuration * 6,
});
export const loadLongBreakSettings = (): IBreakSettings => {
  const localData = localStorage.getItem(storageKeys.longBreak);

  if (!localData) {
    return defaultLongBreakSettings;
  }

  const objLocalData = JSON.parse(localData);

  for (const key in defaultLongBreakSettings) {
    if (!(key in objLocalData)) {
      return defaultLongBreakSettings;
    }
  }

  return {
    intervalBetweenTwoBreaks: objLocalData.intervalBetweenTwoBreaks,
    breakDuration: objLocalData.breakDuration,
  };
};


// options
const defaultSettingOptions: Readonly<ISettingOptions> = Object.freeze({
  timeToPrepareForBreak: 10,
  strictBreak: false,
  allowPostponingBreaks: false,
  postponeDuration: 5,
});
export const loadSettingOptions = (): ISettingOptions => {
  const localData = localStorage.getItem(storageKeys.options);

  if (!localData) {
    return defaultSettingOptions;
  }

  const objLocalData = JSON.parse(localData);

  for (const key in defaultSettingOptions) {
    if (!(key in objLocalData)) {
      return defaultSettingOptions;
    }
  }

  return {
    timeToPrepareForBreak: objLocalData.timeToPrepareForBreak,
    strictBreak: objLocalData.strictBreak,
    allowPostponingBreaks: objLocalData.allowPostponingBreaks,
    postponeDuration: objLocalData.postponeDuration,
  };
};


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
export const loadAdvancedSettings = (): IAdvancedSettings => {
  const localData = localStorage.getItem(storageKeys.advanced);

  if (!localData) {
    return defaultAdvancedSettings;
  }

  const objLocalData = JSON.parse(localData);

  for (const key in defaultAdvancedSettings) {
    if (!(key in objLocalData)) {
      return defaultAdvancedSettings;
    }
  }

  return {
    doNotDisturb: objLocalData.doNotDisturb,
    notification: objLocalData.notification,
    audibleAlert: objLocalData.audibleAlert,
    selectedAudio: objLocalData.selectedAudio,
    smartPause: objLocalData.smartPause,
    screensaver: objLocalData.screensaver,
    darkMode: objLocalData.darkMode,
  };
};
