import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { getColorByIndex } from '../../../helpers/time';
import { useAppSelector } from '../../../redux/reducers/store';
import Tabs from '../../misc/Tabs';
import TodayChart from '../charts/TodayChart';
import RatesTable from './RatesTable';

const renderTable = (title: string, rates: any, thresholds: any) => {
  return (
    <div className="flex-1 p-3 space-y-2 text-center ">
      <div className="sticky z-10 w-full p-4 text-lg font-bold uppercase bg-white rounded-b-lg shadow-sm top-16">
        {title}:
      </div>
      <RatesTable rates={rates} thresholds={thresholds} />
    </div>
  );
};

const RatesContainer: FunctionComponent = () => {
  const { t } = useTranslation();
  const state = useAppSelector(({ rates, settings }) => ({
    hourlyRates: rates.slots,
    locationCode: settings.location
  }));

  const ratesByLocation = state.hourlyRates.map(({ hour, price }) => {
    return { hour, price: price[state.locationCode] };
  });

  let ratesByPrice = [...ratesByLocation].sort((a, b) =>
    a.price > b.price ? 1 : -1
  );

  const ratesByPriceWithColor = ratesByPrice.map(rate => {
    const color = getColorByIndex(ratesByPrice.indexOf(rate));
    return { ...rate, color };
  });

  const ratesByHourWithColor = [...ratesByPriceWithColor].sort((a, b) =>
    a.hour > b.hour ? 1 : -1
  );

  const thresholdPrices = {
    min: ratesByPrice[2].price,
    max: ratesByPrice[ratesByPrice.length - 3].price
  };

  return (
    <div className="px-4">
      {/* Mobile View */}
      <div className="mt-4 md:hidden">
        <Tabs
          tabs={[
            {
              key: 'hours',
              title: <span>{t('SORT.BY_HOUR')}</span>,
              content: (
                <RatesTable
                  rates={ratesByHourWithColor}
                  thresholds={thresholdPrices}
                />
              )
            },
            {
              key: 'prices',
              title: <span>{t('SORT.BY_PRICE')}</span>,
              content: (
                <RatesTable
                  rates={ratesByPriceWithColor}
                  thresholds={thresholdPrices}
                />
              )
            }
          ]}
        />
      </div>

      {/* Desktop View */}
      <div className="self-start hidden mx-auto mt-4 md:block lg:flex">
        <div className="flex flex-1">
          {renderTable(
            t('SORT.BY_HOUR'),
            ratesByHourWithColor,
            thresholdPrices
          )}
          {renderTable(
            t('SORT.BY_PRICE'),
            ratesByPriceWithColor,
            thresholdPrices
          )}
        </div>

        <div className="sticky mt-4 top-16">
          <TodayChart />
        </div>
      </div>
    </div>
  );
};

export default RatesContainer;
