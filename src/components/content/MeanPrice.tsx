import { CashIcon, CurrencyEuroIcon } from '@heroicons/react/outline';
import { ILocationID, IPriceSlotData, ITimeFormat } from '../../helpers/interfaces';

import { Color } from '../../helpers/constants';
import { formatTime } from '../../helpers/time';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export default function MeanPrice() {
    const { t } = useTranslation();

    const rates = useSelector(({ prices }) => prices.data) as IPriceSlotData[]
    const settings = useSelector(({ settings }) => ({
        location: settings.location as ILocationID,
        timeFormat: settings.timeFormat as ITimeFormat,
    }))

    const sumPrices = rates.reduce((acc, rate) => acc + rate.price[settings.location], 0)
    const meanPrice = sumPrices / rates.length;

    return (
        <div className="text-center space-y-2 divide-y divide-gray divide-opacity-50">
            <span className="uppercase text-lg font-bold pb-2">
                {t('TEXT.MEAN_PRICE')}:
            </span>
            <div className="pt-6">
                <div className="text-teal">
                    {/*<SymbolIcon className="w-8 h-8" />*/}
                    <span className="text-4xl font-bold">
                        {meanPrice.toFixed(4)}
                    </span>
                    <span className="text-3xl">
                        €/kWh
                    </span>
                </div>
            </div>
        </div>
    );
};