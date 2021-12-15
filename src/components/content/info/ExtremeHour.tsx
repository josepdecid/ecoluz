import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ILocationID,
  IRatesData,
  ITimeFormat
} from '../../../helpers/interfaces';
import { formatTime } from '../../../helpers/time';
import { useAppSelector } from '../../../redux/reducers/store';

interface ExtremeHourProps {
  extreme: string;
}

const ExtremeHour: FunctionComponent<ExtremeHourProps> = ({ extreme }) => {
  const { t } = useTranslation();

  const rates = useAppSelector(({ rates }) => rates.slots) as IRatesData[];
  const settings = useAppSelector(({ settings }) => ({
    location: settings.location as ILocationID,
    timeFormat: settings.timeFormat as ITimeFormat
  }));

  const extremeHour = rates.reduce((choice, rate) => {
    if (extreme === 'max') {
      return choice.price[settings.location] > rate.price[settings.location]
        ? choice
        : rate;
    } else {
      return choice.price[settings.location] > rate.price[settings.location]
        ? rate
        : choice;
    }
  }, rates[0]);

  let fontColor, text;
  if (extreme === 'max') {
    fontColor = 'text-red-500';
    text = 'TEXT.EXTREME_EXPENSIVE';
  } else {
    fontColor = 'text-green-500';
    text = 'TEXT.EXTREME_CHEAP';
  }

  return (
    <div className="space-y-2 text-center divide-y divide-gray divide-opacity-50">
      <span className="pb-2 text-lg font-bold uppercase">{t(text)}:</span>
      <div className="pt-6">
        <div className={`mb-1 ${fontColor}`}>
          <span className="text-4xl font-bold">
            {extremeHour.price[settings.location].toFixed(4)}
          </span>
          <span className="text-lg">€/kWh</span>
        </div>
        <span className="text-3xl font-bold text-teal-500">
          {formatTime(extremeHour.hour, -1, settings.timeFormat)}
          &nbsp;-&nbsp;
          {formatTime(extremeHour.hour + 1, -1, settings.timeFormat)}
        </span>
      </div>
    </div>
  );
};

export default ExtremeHour;
