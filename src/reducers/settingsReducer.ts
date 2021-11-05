import { AnyAction, Reducer } from 'redux'
import { LOAD_SAVED_SETTINGS, SET_LANGUAGE, SET_LOCATION, SET_TIME_FORMAT, TOGGLE_SETTINGS_DRAWER } from '../actions/settingsActions'
import { LanguageID, LocationID, TimeFormat } from '../helpers/constants'

interface ISettingsReducerState {
    location: string,
    language: string,
    timeFormat: string,
    settingsOpen: boolean
}

const defaultState = {
    location: LocationID.PCB,
    language: LanguageID.es,
    timeFormat: TimeFormat['24h'],
    settingsOpen: false
} as ISettingsReducerState

const getOrDefault = (
    value: LocationID | LanguageID | TimeFormat,
    field: 'location' | 'language' | 'timeFormat'
): string => {
    return value === null ? defaultState[field] : value;
}

const settingsReducer: Reducer<ISettingsReducerState> =
    (state: ISettingsReducerState = defaultState, action: AnyAction) => {
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
                    ...state,
                    language: getOrDefault(action.languageCode, 'language'),
                    location: getOrDefault(action.locationCode, 'location'),
                    timeFormat: getOrDefault(action.timeFormat, 'timeFormat')
                }

            default:
                return state
        }
    }

export default settingsReducer