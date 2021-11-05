import { CogIcon } from '@heroicons/react/outline'
import SettingsButton from './SettingsButton';
import { useTranslation } from 'react-i18next'

export default function AppBar() {
    const { t } = useTranslation('translation');

    return (
        <nav className="fixed z-10 flex items-center justify-between w-full p-3 bg-teal-500">
            <div className="flex items-center flex-shrink-0 mr-6 text-white">
                <img
                    src="/assets/favicon.png" alt={`${t('APP_NAME')} logo`}
                    className="w-10 h-10 mr-1"
                />
                <span className="text-2xl font-bold">
                    {t('APP_NAME')}
                </span>
            </div>

            <div className="lg:flex lg:items-center lg:w-auto">
                <SettingsButton />
            </div>
        </nav>
    )
}
