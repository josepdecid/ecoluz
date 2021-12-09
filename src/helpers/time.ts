import { Color } from './constants';

const numberNames = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
];

export const formatTime = (
  hour: number,
  minute: number,
  format: string = '24h'
) => {
  hour %= 24;

  const secondDigitMinutes = minute < 10 ? '0' : '';

  if (format === '24h') {
    const secondDigitHours = hour < 10 ? '0' : '';
    return (
      secondDigitHours +
      hour +
      (minute >= 0 ? ':' + secondDigitMinutes + minute : 'h')
    );
  } else {
    const suffix = hour < 12 ? 'am' : 'pm';
    hour %= 12;
    if (hour == 0) hour = 12;

    const secondDigitHours = hour < 10 ? '0' : '';
    return (
      secondDigitHours +
      hour +
      (minute >= 0 ? ':' + secondDigitMinutes + minute + suffix : 'h')
    );
  }
};

export const isOffPeakTime = (i: number): boolean => {
  return i >= 0 && i < 8;
};

export const isPeakTime = (i: number): boolean => {
  return (i >= 10 && i < 14) || (i >= 18 && i < 22);
};

export const getColorByTime = (hourIndex: number): Color => {
  if (isOffPeakTime(hourIndex)) return Color.Green;
  else if (isPeakTime(hourIndex)) return Color.Red;
  else return Color.Yellow;
};

export const getColorByIndex = (i: number): string => {
  if (i < 8) return Color.Green;
  else if (i < 16) return Color.Yellow;
  else return Color.Red;
};

export const getColorByTimeFromCurrentTime = (hourIndex: number): string => {
  const currentHour = new Date().getHours();
  const opacityByCurrentHour = hourIndex >= currentHour ? 'FF' : '55';
  const color = getColorByIndex(hourIndex);
  return color + opacityByCurrentHour;
};

export const getNumberName = (hourIndex: number) => {
  let index = hourIndex % 12;
  if (index === 0) index = 12;
  return numberNames[index - 1];
};
