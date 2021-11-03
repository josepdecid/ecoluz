import { IPriceSlotData } from '../helpers/interfaces';
import { UPDATE_PRICES_DATA } from '../actions/pricesActions';

const defaultState = {
    slots: [] as Array<IPriceSlotData>
};

const pricesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_PRICES_DATA:
            return { data: action.priceSlots };
        default:
            return state;
    }
};

export default pricesReducer;