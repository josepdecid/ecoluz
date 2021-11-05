import { UPDATE_CURRENT_DAY, UPDATE_CURRENT_HOUR, UPDATE_PRICES_DATA } from '../actions/pricesActions';

import { IPriceSlotData } from '../helpers/interfaces';

const defaultState = {
    slots: [] as Array<IPriceSlotData>,

    currentHour: new Date().getHours(),
    currentDay: new Date().getDate()
};

const pricesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_PRICES_DATA:
            return { ...state, data: action.priceSlots }

        case UPDATE_CURRENT_HOUR:
            return { ...state, currentHour: action.currentHour }
        case UPDATE_CURRENT_DAY:
            return { ...state, currentDay: action.currentDay }

        default:
            return state
    }
}

export default pricesReducer