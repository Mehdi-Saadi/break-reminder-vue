type StorageKey = 'shortBreak' | 'longBreak' | 'options' | 'advanced';

export const loadSettings = <T extends object>(storageKey: StorageKey, defaultSettings: Readonly<T>): T => {
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

export const saveSettings = <T extends object>(storageKey: StorageKey, settings: T): void =>
  localStorage.setItem(storageKey, JSON.stringify(settings));
