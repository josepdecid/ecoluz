import { IRatesData } from '../helpers/interfaces';

export const UPDATE_PRICES_DATA = 'UPDATE_PRICES_DATA';

export const UPDATE_CURRENT_HOUR = 'UPDATE_CURRENT_HOUR';
export const UPDATE_CURRENT_DAY = 'UPDATE_CURRENT_DAY';

export function updatePricesData(priceSlots: IRatesData[]) {
  return { type: UPDATE_PRICES_DATA, priceSlots };
}

export function updateCurrentHour(currentHour: number) {
  return { type: UPDATE_CURRENT_HOUR, currentHour };
}

export function updateCurrentDay(currentDay: number) {
  return { type: UPDATE_CURRENT_DAY, currentDay };
}
