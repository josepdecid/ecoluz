import { LocationID, TimeFormat } from './constants';

import { AnyAction } from 'redux';

export interface Action extends AnyAction {
  type: any;
  [id: string]: any;
}

export type IReducer<S> = (state: S, action: Action) => S;

export type ITimeFormat = TimeFormat;
export type ILocationID = LocationID;

export type IPriceRegion = Record<string, number>;

export interface IRatesData {
  hour: number;
  price: IPriceRegion;
}

export interface ISlotData {
  hour: number;
  price: number;
  color: string;
}
