import { LOAD_SAVED_SETTINGS, SET_LANGUAGE, SET_LOCATION, SET_TIME_FORMAT, TOGGLE_SETTINGS_DRAWER } from '../actions/settingsActions';

const defaultState = {
    location: 'PCB',
    language: 'es',
    timeFormat: '24h',

    settingsOpen: false
};

const getOrDefault = (value, field) => {
    return value === null ? defaultState[field] : value;
}

const settingsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return { ...state, location: action.locationCode }
        case SET_LANGUAGE:
            return { ...state, language: action.languageCode }
        case SET_TIME_FORMAT:
            return { ...state, timeFormat: action.timeFormat }

        case TOGGLE_SETTINGS_DRAWER:
            return { ...state, settingsOpen: !state.settingsOpen }

        case LOAD_SAVED_SETTINGS:
            return {
                language: getOrDefault(action.languageCode, 'language'),
                location: getOrDefault(action.locationCode, 'location'),
                timeFormat: getOrDefault(action.timeFormat, 'timeFormat')
            }

        default:
            return state
    }
}

export default settingsReducer