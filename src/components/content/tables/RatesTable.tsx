import { ITimeFormat } from '../../../helpers/interfaces'
import { formatTime } from '../../../helpers/time'
import { useSelector } from 'react-redux'

export default function RatesTable(props) {
    const { rates, thresholds } = props

    const timeFormat = useSelector(({ settings }) => settings.timeFormat) as ITimeFormat

    const currentHour = new Date().getHours()

    return (
        <div>
            {rates.map(({ hour, price, color }) => {

                const isRedHour = (price >= thresholds.max)
                const isGreenHour = (price <= thresholds.min)
                const isNow = (hour === currentHour)

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
                        key={hour}
                        className={`py-0.5 pr-3 m-0.5 rounded-md border-${borderColor} border-${borderWidth} bg-${color}`}
                    >
                        <div className="flex justify-between align-center px-2">
                            <div className="align-center rounded-md">
                                {/*<div className="w-6 mx-0.5">
                        {isGreenHour && <CurrencyEuroIcon className="text-white w-18 h-18" />}
                        {isRedHour && <CashIcon className="text-white w-18 h-18" />}
                    </div>*/}
                                <span className="text-xl px-1 font-bold">
                                    {formatTime(hour, 0, timeFormat)}
                                </span>
                                {/*<MaterialCommunityIcons
                        name={`clock-time-${getNumberName(hourIndex % 24)}-outline`}
                    />*/}
                            </div>

                            <div className="flex-between align-end">
                                <span className={`text-lg flex-start ${isNow ? 'text-bold' : ''}`} >
                                    {price.toFixed(4)}
                                </span>
                                <span className={isNow ? 'text-bold' : ''}>
                                    &nbsp;€/kWh
                                </span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}