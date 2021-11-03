import { CashIcon, ChevronRightIcon, CurrencyEuroIcon } from '@heroicons/react/outline'
import { ILocationID, IPriceSlotData, ITimeFormat } from '../../helpers/interfaces'
import { formatTime, getColorByIndex, getNumberName } from '../../helpers/time'

import { useSelector } from 'react-redux';

const sortByField = (
    a: IPriceSlotData, b: IPriceSlotData,
    field: string, location: ILocationID, order: number
) => {
    let aVal, bVal;
    if (field === 'price') {
        aVal = a.price[location];
        bVal = b.price[location];
    } else {
        aVal = a.hour;
        bVal = b.hour;
    }

    return order * (aVal > bVal ? 1 : -1)
};

const renderItem = (hourIndex: number, price: number, color: string, timeFormat: string, thresholdPrices) => {
    const currentHour = new Date().getHours();

    const isRedHour = price >= thresholdPrices['max'];
    const isGreenHour = price <= thresholdPrices['min'];
    const isNow = hourIndex === currentHour;

    let borderColor = 'black';
    if (!isNow) {
        if (isRedHour) borderColor = 'red';
        else if (isGreenHour) borderColor = 'green';
    }

    let borderWidth = 0.4;
    if (isNow) borderWidth = 5;
    else if (isRedHour || isGreenHour) borderWidth = 2;

    return (
        <div
            key={hourIndex}
            className={`py-0.5 pr-3 m-0.5 rounded-md border-${borderColor} border-${borderWidth} bg-${color}`}
        >
            <div className="flex justify-between align-center px-2">
                <div className="align-center rounded-md">
                    <div className="w-6 mx-0.5">
                        {isGreenHour && <CurrencyEuroIcon className="text-white w-18 h-18" />}
                        {isRedHour && <CashIcon className="text-white w-18 h-18" />}
                    </div>
                    <span className="text-xl px-1 font-bold">
                        {formatTime(hourIndex, 0, timeFormat)}
                    </span>
                    {/*<MaterialCommunityIcons
                        name={`clock-time-${getNumberName(hourIndex % 24)}-outline`}
                    />*/}
                </div>

                <ChevronRightIcon className="text-black w-24 h-24" />

                <div className="flex-between align-end">
                    <span className={`text-lg flex-start ${hourIndex === currentHour ? 'text-bold' : ''}`} >
                        {price.toFixed(4)}
                    </span>
                    <span className={hourIndex === currentHour ? 'text-bold' : ''}>
                        &nbsp;€/kWh
                    </span>
                </div>
            </div>
        </div >
    );
};

export default function TableTimes() {
    const state = useSelector(({ prices, sorting, settings }) => ({
        pricesList: prices.data as IPriceSlotData[],

        field: sorting.field,
        order: sorting.order,

        locationID: settings.location as ILocationID,
        timeFormat: settings.timeFormat as ITimeFormat
    }));

    const rowsByPrice = [...state.pricesList]
        .sort((a, b) => sortByField(a, b, 'price', state.locationID, 1));

    const sortedRows = [...state.pricesList]
        .map(row => ({ ...row, color: getColorByIndex(rowsByPrice.indexOf(row)) }))
        .sort((a, b) => sortByField(a, b, state.field, state.locationID, state.order));

    const thresholdPrices = {
        min: rowsByPrice[2].price[state.locationID],
        max: rowsByPrice[rowsByPrice.length - 3].price[state.locationID]
    };

    return (
        <div className="flex p-3 bg-white rounded-lg">
            {sortedRows.map(({ hour, price, color }) => {
                return renderItem(hour, price[state.locationID], color, state.timeFormat, thresholdPrices);
            })}
        </div>
    )
};
