import { useAppSelector } from '../../../reducers/store';
import { useTranslation } from 'react-i18next';

export default function MeanPrice() {
    const { t } = useTranslation();

    const rates = useAppSelector(({ rates }) => rates.slots)
    const settings = useAppSelector(({ settings }) => ({
        location: settings.location,
        timeFormat: settings.timeFormat,
    }))

    const sumPrices = rates.reduce((acc, rate) => acc + rate.price[settings.location], 0)
    const meanPrice = sumPrices / rates.length;

    return (
        <div className="space-y-2 text-center divide-y divide-gray divide-opacity-50">
            <span className="pb-2 text-lg font-bold uppercase">
                {t('TEXT.MEAN_PRICE')}:
            </span>
            <div className="pt-6">
                <div className="text-teal-500">
                    {/*<SymbolIcon className="w-8 h-8" />*/}
                    <span className="text-4xl font-bold">
                        {meanPrice.toFixed(4)}
                    </span>
                    <span className="text-lg">
                        €/kWh
                    </span>
                </div>
            </div>
        </div>
    );
};