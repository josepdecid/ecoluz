import { ILocationID, IPriceSlotData, ITimeFormat } from '../../../helpers/interfaces';

import RatesTable from './RatesTable'
import Tabs from '../../misc/Tabs'
import { getColorByIndex } from '../../../helpers/time';
import { useSelector } from 'react-redux'

export default function RatesContainer() {
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
            <div className="md:hidden mt-4">
                <Tabs tabs={[
                    {
                        title: 'Por Horas',
                        content: <RatesTable rates={ratesByHour} thresholds={thresholdPrices} />
                    },
                    {
                        title: 'Por Precio',
                        content: <RatesTable rates={ratesByPrice} thresholds={thresholdPrices} />
                    }
                ]} />
            </div>

            {/*<div className="hidden md:flex space-x-4">
                <RatesTable />
            </div>*/}
        </>
    )
}