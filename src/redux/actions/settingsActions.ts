export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_LOCATION = 'SET_LOCATION';
export const SET_TIME_FORMAT = 'SET_TIME_FORMAT';
export const TOGGLE_SETTINGS_DRAWER = 'TOGGLE_SETTINGS_DRAWER';
export const LOAD_SAVED_SETTINGS = 'LOAD_SAVED_SETTINGS';

export function setLocationSetting(locationCode: string) {
  localStorage.setItem('@location', locationCode);
  return { type: SET_LOCATION, locationCode };
}

export function setLanguageSetting(languageCode: string) {
  localStorage.setItem('@language', languageCode);
  return { type: SET_LANGUAGE, languageCode };
}

export function setTimeFormatSetting(timeFormat: string) {
  localStorage.setItem('@timeFormat', timeFormat);
  return { type: SET_TIME_FORMAT, timeFormat };
}

export function toggleSettingsDrawer() {
  return { type: TOGGLE_SETTINGS_DRAWER };
}

export function loadSavedSettings() {
  const languageCode = localStorage.getItem('@language');
  const locationCode = localStorage.getItem('@location');
  const timeFormat = localStorage.getItem('@timeFormat');

  return {
    type: LOAD_SAVED_SETTINGS,
    languageCode,
    locationCode,
    timeFormat,
  };
}
