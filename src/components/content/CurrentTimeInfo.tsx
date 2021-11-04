import { ILocationID, IPriceSlotData, ITimeFormat } from '../../helpers/interfaces';
import { formatTime, getColorByTime } from '../../helpers/time';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

export default function CurrentTimeInfo() {
    const state = useSelector(({ prices, settings }) => ({
        pricesList: prices.data as IPriceSlotData[],

        locationField: settings.location as ILocationID,
        timeFormat: settings.timeFormat as ITimeFormat,
    }))

    const getAndFormatTime = () => {
        const date = new Date()
        return formatTime(date.getHours(), date.getMinutes(), state.timeFormat)
    }

    const getPriceByTime = () => {
        const date = new Date()
        const currentSlot = state.pricesList.find(x => x.hour === date.getHours())
        return currentSlot!.price[state.locationField]
    }

    const [currentTime, setCurrentTime] = useState(getAndFormatTime())
    const [currentPrice, setCurrentPrice] = useState(getPriceByTime())

    // Update timer to keep it on time
    useEffect(() => {
        setInterval(() => {
            setCurrentTime(getAndFormatTime())
            setCurrentPrice(getPriceByTime())
        }, 1000)
    }, [state])

    const currentHour = new Date().getHours()
    const currentTimeBackgroundColor = getColorByTime(currentHour)

    return (
        <div className={`p-6 rounded-lg shadow-2xl bg-${currentTimeBackgroundColor}`}>
            <div className="bg-white rounded-lg border border-white p-4">
                <span className="text-2xl lg:text-4xl font-bold">
                    {currentTime}
                </span>
            </div>
            <div className="bg-white rounded-lg border border-white p-4 mt-4">
                <span className="text-4xl lg:text-8xl font-bold">
                    {currentPrice.toFixed(4)}
                </span>
                <span className="text-xl lg:text-4xl align-right">
                    €/kWh
                </span>
            </div>
        </div>
    );
};