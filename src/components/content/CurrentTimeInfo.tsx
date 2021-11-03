import { ILocationID, IPriceSlotData, ITimeFormat } from '../../helpers/interfaces';
import { formatTime, getColorByTime } from '../../helpers/time';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

export default function CurrentTimeInfo() {

    const [currentTime, setCurrentTime] = useState('-');
    const [currentPrice, setCurrentPrice] = useState(0);

    const state = useSelector(({ prices, settings }) => ({
        pricesList: prices.data as IPriceSlotData[],

        locationField: settings.location as ILocationID,
        timeFormat: settings.timeFormat as ITimeFormat,
    }));

    useEffect(() => {
        // Update timer to keep it on time
        setInterval(() => {
            const date = new Date();
            const timeWithFormat = formatTime(date.getHours(), date.getMinutes(), state.timeFormat);
            setCurrentTime(timeWithFormat);

            const currentSlot = state.pricesList.find(x => x.hour === date.getHours());
            if (currentSlot !== undefined) {
                const priceValue = currentSlot.price[state.locationField];
                setCurrentPrice(priceValue);
            }
        }, 1000);
    }, [state]);

    const currentHour = new Date().getHours();
    const currentTimeBackgroundColor = getColorByTime(currentHour);

    return (
        <div className={`p-6 rounded-lg shadow-9 bg-${currentTimeBackgroundColor}`}>
            <div className="bg-white rounded-lg border border-white p-4">
                <span className="text-4xl font-bold">
                    {currentTime}
                </span>
            </div>
            <div className="bg-white rounded-lg border border-white p-4 mt-4">
                <span className="text-8xl font-bold">
                    {currentPrice.toFixed(4)}
                </span>
                <span className="text-4xl align-right">
                    €/kWh
                </span>
            </div>
        </div>
    );
};