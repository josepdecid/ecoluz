import { combineReducers } from 'redux';
import pricesReducer from './pricesReducer';
import settingsReducer from './settingsReducer';
import sortingReducer from './sortingReducer';

const rootReducer = combineReducers({
    prices: pricesReducer,
    sorting: sortingReducer,
    settings: settingsReducer
});

export default rootReducer;