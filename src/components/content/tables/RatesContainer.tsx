import { ILocationID, IPriceSlotData } from '../../../helpers/interfaces'

import RatesTable from './RatesTable'
import Tabs from '../../misc/Tabs'
import { getColorByIndex } from '../../../helpers/time'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

export default function RatesContainer() {
    const { t } = useTranslation();
    const state = useSelector(({ prices, settings }) => ({
        hourlyRates: prices.data as IPriceSlotData[],

        locationCode: settings.location as ILocationID,
    }));

    const ratesByLocation = state.hourlyRates.map(({ hour, price }) => {
        return { hour, price: price[state.locationCode] }
    })

    let ratesByPrice = [...ratesByLocation].sort((a, b) => a.price > b.price ? 1 : -1)
    ratesByPrice = ratesByPrice.map(rate => {
        const color = getColorByIndex(ratesByPrice.indexOf(rate))
        return { ...rate, color }
    })

    const ratesByHour = [...ratesByPrice].sort((a, b) => a.hour > b.hour ? 1 : -1)

    const thresholdPrices = {
        min: ratesByPrice[2].price,
        max: ratesByPrice[ratesByPrice.length - 3].price
    };

    return (
        <>
            <div className="mt-4 md:hidden">
                <Tabs tabs={[
                    {
                        key: 'hours',
                        title: <span>{t('SORT.BY_HOUR')}</span>,
                        content: <RatesTable rates={ratesByHour} thresholds={thresholdPrices} />
                    },
                    {
                        key: 'prices',
                        title: <span>{t('SORT.BY_PRICE')}</span>,
                        content: <RatesTable rates={ratesByPrice} thresholds={thresholdPrices} />
                    }
                ]} />
            </div>

            <div className={`
                    items-center hidden w-full grid-cols-2 mt-4 md:grid place-items-center
            `}>
                <div className="space-y-2 text-center divide-y divide-gray divide-opacity-50">
                    <span className="pb-2 text-lg font-bold uppercase">
                        {t('SORT.BY_HOUR')}:
                    </span>
                    <RatesTable rates={ratesByHour} thresholds={thresholdPrices} />
                </div>
                <div className="space-y-2 text-center divide-y divide-gray divide-opacity-50">
                    <span className="pb-2 text-lg font-bold uppercase">
                        {t('SORT.BY_PRICE')}:
                    </span>
                    <RatesTable rates={ratesByPrice} thresholds={thresholdPrices} />
                </div>
            </div>
        </>
    )
}