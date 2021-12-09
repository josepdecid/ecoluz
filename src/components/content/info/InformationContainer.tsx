import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/outline';
import Tabs from '../../misc/Tabs';
import CurrentTimeInfo from './CurrentTimeInfo';
import ExtremeHour from './ExtremeHour';
import MeanPrice from './MeanPrice';

export default function InformationContainer() {
  return (
    <div className="px-4">
      {/* Mobile layout*/}
      <div className="md:hidden">
        <CurrentTimeInfo />

        <div className="mt-4">
          <Tabs
            tabs={[
              {
                key: 'mean',
                title: (
                  <PresentationChartLineIcon className="w-8 h-8 mx-auto" />
                ),
                content: <MeanPrice />,
              },
              {
                key: 'min',
                title: <ArrowCircleDownIcon className="w-8 h-8 mx-auto" />,
                content: <ExtremeHour extreme="min" />,
              },
              {
                key: 'max',
                title: <ArrowCircleUpIcon className="w-8 h-8 mx-auto" />,
                content: <ExtremeHour extreme="max" />,
              },
            ]}
          />
        </div>
      </div>

      {/* Tablet and Desktop layout */}
      <div className="items-center hidden md:block lg:flex">
        <CurrentTimeInfo />

        <div className="flex justify-center flex-1 space-x-12 lg:justify-start lg:ml-12 md:mt-6 md:mb-12">
          <MeanPrice />
          <ExtremeHour extreme="min" />
          <ExtremeHour extreme="max" />
        </div>
      </div>
    </div>
  );
}
