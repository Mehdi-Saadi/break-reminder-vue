import { BreakMessages } from '@/types/settings';

type MessageStorageKey = 'shortBreakMessages' | 'longBreakMessages';

export const loadMessages = (storageKey: MessageStorageKey, defaultMessages: Readonly<BreakMessages>): BreakMessages => {
  const localData = localStorage.getItem(storageKey);

  if (!localData) {
    return {...defaultMessages};
  }

  try {
    const parsedData = JSON.parse(localData);

    return {...parsedData};
  } catch {
    return {...defaultMessages};
  }
};

export const saveMessages = (storageKey: MessageStorageKey, messages: BreakMessages): void =>
  localStorage.setItem(storageKey, JSON.stringify(messages));
