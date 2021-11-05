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
    hour: number
    price: IPriceRegion
}

export interface ISlotData {
    hour: number
    price: number
    color: string
}

export interface ITabProps {
    title: any
    key: string
    content: any
}

export interface IRadioInputItems {
    name: string
    code: string
}

export interface IRadioInputProps {
    title: string
    translate?: boolean
    items: IRadioInputItems[]
    value: string
    onChange: (code: string) => void

}