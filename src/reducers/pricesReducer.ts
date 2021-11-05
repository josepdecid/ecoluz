import { UPDATE_CURRENT_DAY, UPDATE_PRICES_DATA } from '../actions/pricesActions';

import { IPriceSlotData } from '../helpers/interfaces';

const defaultState = {
    slots: [] as Array<IPriceSlotData>,
    currentDay: new Date().getDate()
};

const pricesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_PRICES_DATA:
            return { ...state, data: action.priceSlots }
        case UPDATE_CURRENT_DAY:
            return { ...state, curretnDay: action.currentDay }

        default:
            return state
    }
}

export default pricesReducer