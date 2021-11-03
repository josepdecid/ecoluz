import { languages, locations, timeFormats } from '../../../helpers/languages';
import { setLanguageSetting, setLocationSetting, setTimeFormatSetting } from '../../../actions/settingsActions';
import { useDispatch, useSelector } from 'react-redux';

import { RadioGroup } from '@headlessui/react'
import { useTranslation } from 'react-i18next';

export default function Settings(props) {
    const { t } = useTranslation('translation');

    const dispatch = useDispatch();
    const state = useSelector(({ settings }) => ({
        location: settings.location,
        language: settings.language,
        timeFormat: settings.timeFormat
    }));

    return (
        <div className="mx-6 my-4">
            <span className="text-2xl font-bold my-3">
                {t('TITLE.SETTINGS')}
            </span>

            {/* LOCATION */}
            <span className="font-lg">
                {t('HINT.SELECT_LOCATION')}:
            </span>
            <RadioGroup
                value={state.location}
                onChange={(code: string) => dispatch(setLocationSetting(code))}
            >
                <RadioGroup.Label>Plan</RadioGroup.Label>
                {locations.map(({ name, code }) => (
                    <RadioGroup.Option key={code} value={code} className="mt-1">
                        {({ checked }) => (
                            <span className={checked ? 'bg-blue-200' : ''}>
                                {t(name)}
                            </span>
                        )}
                    </RadioGroup.Option>
                ))}
            </RadioGroup>

            {/* LANGUAGE */}
            <span className="font-lg">
                {t('HINT.SELECT_LANGUAGE')}:
            </span>
            <RadioGroup
                value={state.language}
                onChange={(code: string) => dispatch(setLanguageSetting(code))}
            >
                <RadioGroup.Label>Plan</RadioGroup.Label>
                {languages.map(({ name, code }) => (
                    <RadioGroup.Option key={code} value={code} className="mt-1">
                        {({ checked }) => (
                            <span className={checked ? 'bg-blue-200' : ''}>
                                {name}
                            </span>
                        )}
                    </RadioGroup.Option>
                ))}
            </RadioGroup>

            {/* TIME FORMAT */}
            <span className="font-lg">
                {t('HINT.SELECT_TIME_FORMAT')}:
            </span>
            <RadioGroup
                value={state.timeFormat}
                onChange={(code: string) => dispatch(setTimeFormatSetting(code))}
            >
                <RadioGroup.Label>Plan</RadioGroup.Label>
                {timeFormats.map(({ name, code }) => (
                    <RadioGroup.Option key={code} value={code} className="mt-1">
                        {({ checked }) => (
                            <span className={checked ? 'bg-blue-200' : ''}>
                                {name}
                            </span>
                        )}
                    </RadioGroup.Option>
                ))}
            </RadioGroup>

            {/*<span fontSize="2xl" bold my="3">{t('TITLE.ABOUT')}</span>

            <IconButton
                icon={<Icon as={<AntDesign name="github" color="black" />} size={20} />}
                onPress={() => Linking.openURL('https://github.com/josepdecid/eco-luz')}
            />*/}
        </div>
    );
};