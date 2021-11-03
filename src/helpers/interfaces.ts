import { LocationID, TimeFormat } from './constants';

export type ITimeFormat = TimeFormat;
export type ILocationID = LocationID;

export type IPriceRegion = Record<ILocationID, number>;

export interface IPriceSlotData {
    hour: number;
    price: IPriceRegion;
}