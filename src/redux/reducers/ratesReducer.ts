import { Action, IRatesData } from '../../helpers/interfaces';
import { AnyAction, Reducer } from 'redux';
import {
  UPDATE_CURRENT_DAY,
  UPDATE_CURRENT_HOUR,
  UPDATE_PRICES_DATA,
} from '../actions/pricesActions';

export interface IPricesReducerState {
  slots: IRatesData[];
  currentHour: number;
  currentDay: number;
}

const defaultState = {
  slots: [],
  currentHour: new Date().getHours(),
  currentDay: new Date().getDate(),
} as IPricesReducerState;

const pricesReducer: Reducer<IPricesReducerState, AnyAction> = (
  state: IPricesReducerState = defaultState,
  action: Action
) => {
  switch (action.type) {
    case UPDATE_PRICES_DATA:
      return { ...state, slots: action.priceSlots };

    case UPDATE_CURRENT_HOUR:
      return { ...state, currentHour: action.currentHour };
    case UPDATE_CURRENT_DAY:
      return { ...state, currentDay: action.currentDay };

    default:
      return state;
  }
};

export default pricesReducer;
