import { useTranslation } from 'react-i18next'
import { getColorByIndex } from '../../../helpers/time'
import { useAppSelector } from '../../../reducers/store'
import TodayChart from '../../charts/TodayChart'
import Tabs from '../../misc/Tabs'
import RatesTable from './RatesTable'

const renderTable = (title: string, rates: any, thresholds: any) => {
    return (
        <div className="space-y-2 text-center">
            <div className="sticky w-full p-4 text-lg font-bold uppercase bg-white top-16">
                {title}:
            </div>
            <RatesTable rates={rates} thresholds={thresholds} />
        </div>
    )
}

export default function RatesContainer() {
    const { t } = useTranslation();
    const state = useAppSelector(({ rates, settings }) => ({
        hourlyRates: rates.slots,
        locationCode: settings.location,
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
        <div className="px-4">
            {/* Mobile View */}
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

            {/* Desktop View */}
            <div className="self-start hidden mt-4 md:flex">
                <div className="flex flex-1 divide-x divide-gray divide-opacity-50">
                    {renderTable(t('SORT.BY_HOUR'), ratesByHour, thresholdPrices)}
                    {renderTable(t('SORT.BY_PRICE'), ratesByPrice, thresholdPrices)}
                </div>

                <div className="flex-grow">
                    <div className="sticky w-3/4 ml-4 top-24">
                    <TodayChart />
                    </div>
                </div>
            </div>
        </div>
    )
}