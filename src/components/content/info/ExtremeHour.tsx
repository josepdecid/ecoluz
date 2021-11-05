import { ILocationID, IRatesData, ITimeFormat } from '../../../helpers/interfaces';

import { Color } from '../../../helpers/constants';
import { formatTime } from '../../../helpers/time';
import { useAppSelector } from '../../../reducers/store';
import { useTranslation } from 'react-i18next';

export default function ExtremeHour(props: any) {
    const { extreme } = props
    const { t } = useTranslation()

    const rates = useAppSelector(({ rates }) => rates.slots) as IRatesData[]
    const settings = useAppSelector(({ settings }) => ({
        location: settings.location as ILocationID,
        timeFormat: settings.timeFormat as ITimeFormat,
    }))

    const extremeHour = rates.reduce((choice, rate) => {
        if (extreme === 'max') {
            return choice.price[settings.location] > rate.price[settings.location] ? choice : rate;
        } else {
            return choice.price[settings.location] > rate.price[settings.location] ? rate : choice;
        }
    }, rates[0])

    let backgroundColor, text
    if (extreme === 'max') {
        backgroundColor = Color.Red
        text = 'TEXT.EXTREME_EXPENSIVE'
    } else {
        backgroundColor = Color.Green
        text = 'TEXT.EXTREME_CHEAP'
    }

    return (
        <div className="space-y-2 text-center divide-y divide-gray divide-opacity-50">
            <span className="pb-2 text-lg font-bold uppercase">
                {t(text)}:
            </span>
            <div className="pt-6">
                <span className="text-4xl font-bold text-teal-500">
                    {formatTime(extremeHour.hour, -1, settings.timeFormat)}
                    &nbsp;-&nbsp;
                    {formatTime(extremeHour.hour + 1, -1, settings.timeFormat)}
                </span>
                <div className={`text-${backgroundColor} mt-3`}>
                    <span className="text-3xl font-bold">
                        {extremeHour.price[settings.location].toFixed(4)}
                    </span>
                    <span className="text-2xl">
                        €/kWh
                    </span>
                </div>
            </div>
        </div>
    );
};