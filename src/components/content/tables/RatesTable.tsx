import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/solid'
import { IRatesData, ISlotData } from '../../../helpers/interfaces'

import { formatTime } from '../../../helpers/time'
import { useAppSelector } from '../../../reducers/store'

export default function RatesTable(props: any) {
    const { rates, thresholds }: { rates: Array<ISlotData>, thresholds: any } = props

    const timeFormat = useAppSelector(({ settings }) => settings.timeFormat)
    const currentHour = useAppSelector(({ rates }) => rates.currentHour)

    return (
        <div>
            {rates.map(({ hour, price, color }) => {

                const isRedHour = (price >= thresholds.max)
                const isGreenHour = (price <= thresholds.min)
                const isNow = (hour === currentHour)

                return (
                    <div
                        key={hour}
                        className={`
                            py-0.5 pr-3 m-0.5 bg-${color}-500 rounded-md
                            ${isNow ? 'border-4 border-black' : ''}
                            ${isRedHour ? 'border-2 border-red-700' : ''}
                            ${isGreenHour ? 'border-2 border-green-700' : ''}
                            ${currentHour > hour ? 'opacity-30' : ''}
                        `}
                    >
                        <div className="flex justify-between px-2 align-center">
                            <div className="flex items-center flex-shrink-0 rounded-md">
                                <span className="px-1 text-xl font-bold">
                                    {formatTime(hour, 0, timeFormat)}
                                </span>
                                <div className="w-6 mx-0.5 text-black">
                                    {isGreenHour && <CheckCircleIcon className="w-18 h-18" />}
                                    {isRedHour && <ExclamationCircleIcon className="w-18 h-18" />}
                                </div>
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
    )
}