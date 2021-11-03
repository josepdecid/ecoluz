import { IPriceSlotData } from '../helpers/interfaces';

export const UPDATE_PRICES_DATA = 'UPDATE_PRICES_DATA';

export function updatePricesData(priceSlots: Array<IPriceSlotData>) {
    return { type: UPDATE_PRICES_DATA, priceSlots };
}