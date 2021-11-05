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
                        title: <span>{t('SORT.BY_PRICE')}</span>,
                        content: <RatesTable rates={ratesByHour} thresholds={thresholdPrices} />
                    },
                    {
                        key: 'prices',
                        title: <span>{t('SORT.BY_HOUR')}</span>,
                        content: <RatesTable rates={ratesByPrice} thresholds={thresholdPrices} />
                    }
                ]} />
            </div>

            <div className="hidden mt-4 space-x-4 md:flex justify-items-center">
                <RatesTable rates={ratesByHour} thresholds={thresholdPrices} />
                <RatesTable rates={ratesByPrice} thresholds={thresholdPrices} />
            </div>
        </>
    )
}