import { ArrowCircleDownIcon, ArrowCircleUpIcon, PresentationChartLineIcon } from '@heroicons/react/outline'
import Tabs from '../../misc/Tabs'
import CurrentTimeInfo from './CurrentTimeInfo'
import ExtremeHour from './ExtremeHour'
import MeanPrice from './MeanPrice'


export default function InformationContainer() {
    // Show everything side-by-side on tablet or larger
    return (
        <div className="px-4 bg-white md:pb-5 top-20 md:flex md:space-x-6">
            <div className="flex-2">
                <CurrentTimeInfo />
            </div>

            {/* Mobile layout for Mean, Max and Min prices*/}
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

            <div className="flex-1 hidden space-x-10 md:flex">
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