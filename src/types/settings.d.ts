type Minutes = number;
type Seconds = number;

export interface IBreakSettings {
  intervalBetweenTwoBreaks: Minutes;
  breakDuration: Seconds;
}

export interface ISettingOptions {
  timeToPrepareForBreak: Seconds;
  strictBreak: boolean;
  allowPostponingBreaks: boolean;
  postponeDuration: Minutes;
}

export interface IAdvancedSettings {
  doNotDisturb: boolean;
  notification: boolean;
  audibleAlert: boolean;
  selectedAudio: string;
  smartPause: boolean;
  screensaver: boolean;
  darkMode: boolean;
}
