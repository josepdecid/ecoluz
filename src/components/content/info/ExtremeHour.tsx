import { CashIcon, CurrencyEuroIcon } from '@heroicons/react/outline';
import { ILocationID, IPriceSlotData, ITimeFormat } from '../../../helpers/interfaces';

import { Color } from '../../../helpers/constants';
import { formatTime } from '../../../helpers/time';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export default function ExtremeHour({ extreme }) {
    const { t } = useTranslation();

    const rates = useSelector(({ prices }) => prices.data) as IPriceSlotData[]
    const settings = useSelector(({ settings }) => ({
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
                    {formatTime(extremeHour.hour, undefined, settings.timeFormat)}
                    &nbsp;-&nbsp;
                    {formatTime(extremeHour.hour + 1, undefined, settings.timeFormat)}
                </span>
                <div className={`text-${backgroundColor} mt-3`}>
                    {/*<SymbolIcon className="w-8 h-8" />*/}
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