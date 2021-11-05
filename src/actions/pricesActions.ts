import { IPriceSlotData } from '../helpers/interfaces'

export const UPDATE_PRICES_DATA = 'UPDATE_PRICES_DATA'
export const UPDATE_CURRENT_DAY = 'UPDATE_CURRENT_DAY'

export function updatePricesData(priceSlots: Array<IPriceSlotData>) {
    return { type: UPDATE_PRICES_DATA, priceSlots }
}

export function updateCurrentDay(currentDay: number) {
    return { type: UPDATE_CURRENT_DAY, currentDay }
}