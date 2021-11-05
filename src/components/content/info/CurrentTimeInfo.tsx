import { ILocationID, IRatesData, ITimeFormat } from '../../../helpers/interfaces'
import { formatTime, getColorByIndex } from '../../../helpers/time'
import { updateCurrentDay, updateCurrentHour } from '../../../actions/pricesActions'
import { useAppDispatch, useAppSelector } from '../../../reducers/store'
import { useEffect, useState } from 'react'

let timerInterval: any = null;

export default function CurrentTimeInfo() {
    const dispatch = useAppDispatch()
    const state = useAppSelector(({ rates, settings }) => ({
        hourlyRates: rates.slots,

        currentHour: rates.currentHour,
        currentDay: rates.currentDay,

        locationCode: settings.location,
        timeFormat: settings.timeFormat,
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

            const date = new Date()
            const currentHour = date.getHours()
            if (currentHour !== state.currentHour) {
                dispatch(updateCurrentHour(currentHour))
            }
            const currentDay = date.getDate()
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