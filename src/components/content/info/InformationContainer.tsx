import { ArrowCircleDownIcon, ArrowCircleUpIcon, PresentationChartLineIcon } from '@heroicons/react/outline'

import CurrentTimeInfo from './CurrentTimeInfo'
import ExtremeHour from './ExtremeHour'
import MeanPrice from './MeanPrice'
import Tabs from '../../misc/Tabs'

export default function InformationContainer() {
    return (
        <div className="lg:flex lg:space-x-6">
            <div className="flex-2">
                <CurrentTimeInfo />
            </div>

            <div className="mt-4 md:hidden">
                <Tabs tabs={[
                    {
                        key: 'mean',
                        title: <PresentationChartLineIcon className="w-8 h-8 mx-auto" />,
                        content: <MeanPrice />
                    },
                    {
                        key: 'min',
                        title: <ArrowCircleDownIcon className="w-8 h-8 mx-auto" />,
                        content: <ExtremeHour extreme="min" />
                    },
                    {
                        key: 'max',
                        title: <ArrowCircleUpIcon className="w-8 h-8 mx-auto" />,
                        content: <ExtremeHour extreme="max" />
                    }
                ]} />
            </div>

            <div className="flex-1 hidden space-x-4 md:flex">
                <div className="flex-1 mt-10">
                    <MeanPrice />
                </div>
                <div className="flex-1 mt-10">
                    <ExtremeHour extreme="min" />
                </div>
                <div className="flex-1 mt-10">
                    <ExtremeHour extreme="max" />
                </div>
            </div>
        </div>
    )
}