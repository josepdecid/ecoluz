import { ILocationID, IPriceSlotData, ITimeFormat } from '../../../helpers/interfaces';
import { formatTime, getColorByIndex } from '../../../helpers/time';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { updateCurrentDay } from '../../../actions/pricesActions';

let timerInterval = null;

export default function CurrentTimeInfo() {
    const dispatch = useDispatch()
    const state = useSelector(({ prices, settings }) => ({
        hourlyRates: prices.data as IPriceSlotData[],
        currentDay: prices.currentDay as number,

        locationCode: settings.location as ILocationID,
        timeFormat: settings.timeFormat as ITimeFormat,
    }))

    const ratesByPrice = [...state.hourlyRates].sort((a, b) =>
        a.price[state.locationCode] > b.price[state.locationCode] ? 1 : -1)

    const getAndFormatTime = () => {
        const date = new Date()
        return formatTime(date.getHours(), date.getMinutes(), state.timeFormat)
    }

    const getRateByTime = () => {
        const date = new Date()
        return ratesByPrice.find(x => x.hour === date.getHours())!
    }

    const [currentTime, setCurrentTime] = useState(getAndFormatTime())
    const [currentRate, setCurrentRate] = useState(getRateByTime())

    // Update timer to keep it on time
    useEffect(() => {
        if (timerInterval !== null) clearInterval(timerInterval)

        timerInterval = setInterval(() => {
            setCurrentTime(getAndFormatTime())
            setCurrentRate(getRateByTime())

            const currentDay = new Date().getDate()
            if (currentDay !== state.currentDay) {
                dispatch(updateCurrentDay(currentDay))
            }
        }, 1000)
    }, [state])

    const currentTimeBackgroundColor = getColorByIndex(ratesByPrice.indexOf(currentRate))

    return (
        <div className={`p-6 rounded-lg shadow-2xl bg-${currentTimeBackgroundColor}-500`}>
            <div className="float-left p-4 bg-white border border-white rounded-lg w-max">
                <span className="text-2xl font-bold lg:text-4xl">
                    {currentTime}
                </span>
            </div>
            <div className="p-4 mt-4 text-right bg-white border border-white rounded-lg">
                <span className="text-5xl font-bold lg:text-8xl">
                    {currentRate.price[state.locationCode].toFixed(4)}
                </span>
                <span className="text-2xl lg:text-4xl align-right">
                    €/kWh
                </span>
            </div>
        </div>
    );
};