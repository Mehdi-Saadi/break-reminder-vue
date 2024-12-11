import en from '@/langs/en.ts';

export type IAppWords = {
  [K in keyof typeof en]: string;
};
