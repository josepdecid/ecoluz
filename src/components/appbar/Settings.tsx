import { languages, locations, timeFormats } from '../../helpers/languages';
import {
  setLanguageSetting,
  setLocationSetting,
  setTimeFormatSetting,
  toggleSettingsDrawer
} from '../../redux/actions/settingsActions';
import { useAppDispatch, useAppSelector } from '../../redux/reducers/store';

import RadioInput from '../misc/RadioInput';
import { XCircleIcon } from '@heroicons/react/outline';
import { useTranslation } from 'react-i18next';
import { FunctionComponent } from 'react';

const Settings: FunctionComponent = () => {
  const { t } = useTranslation('translation');

  const dispatch = useAppDispatch();
  const state = useAppSelector(({ settings }) => ({
    location: settings.location,
    language: settings.language,
    timeFormat: settings.timeFormat
  }));

  return (
    <div>
      <div className="fixed z-10 flex items-center justify-between w-full px-5 py-4 bg-teal-500 shadow-2xl">
        <span className="text-2xl font-bold text-white">
          {t('SETTINGS.TITLE')}
        </span>
        <XCircleIcon
          className="w-8 h-8 ml-2 text-white cursor-pointer"
          onClick={() => dispatch(toggleSettingsDrawer())}
        />
      </div>

      <div className="mx-4 mt-20 divide-y-2">
        <div className="py-4">
          <RadioInput
            title="SETTINGS.SELECT_LOCATION"
            translate
            items={locations}
            value={state.location}
            onChange={(code: string) => dispatch(setLocationSetting(code))}
          />
        </div>

        <div className="py-4">
          <RadioInput
            title="SETTINGS.SELECT_LANGUAGE"
            translate
            items={languages}
            value={state.language}
            onChange={(code: string) => dispatch(setLanguageSetting(code))}
          />
        </div>

        <div className="py-4">
          <RadioInput
            title="SETTINGS.SELECT_TIME_FORMAT"
            items={timeFormats}
            value={state.timeFormat}
            onChange={(code: string) => dispatch(setTimeFormatSetting(code))}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
