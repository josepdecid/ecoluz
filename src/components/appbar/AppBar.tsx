import SettingsButton from './SettingsButton';
import { useTranslation } from 'react-i18next';
import { FunctionComponent } from 'react';

const AppBar: FunctionComponent = () => {
  const { t } = useTranslation('translation');

  return (
    <nav className="fixed z-20 flex items-center justify-between w-full p-3 bg-teal-500">
      <a href="https://josepdecid.me/ecoluz/">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <img
            src="/ecoluz/favicon.ico"
            alt={`${t('APP_NAME')} logo`}
            className="w-10 h-10 mr-1"
          />
          <span className="text-2xl font-bold">{t('APP_NAME')}</span>
        </div>
      </a>

      <div className="lg:flex lg:items-center lg:w-auto">
        <SettingsButton />
      </div>
    </nav>
  );
};

export default AppBar;
