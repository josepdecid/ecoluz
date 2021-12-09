import { useAppDispatch, useAppSelector } from './reducers/store';

import AppBar from './components/appbar/AppBar';
import Content from './components/content/Content';
import Drawer from './components/misc/Drawer';
// import Footer from './components/footer/Footer';
import Settings from './components/content/settings/Settings';
import { toggleSettingsDrawer } from './actions/settingsActions';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { i18n } = useTranslation();

  const dispatch = useAppDispatch();
  const state = useAppSelector(({ settings }) => ({
    settingsOpen: settings.settingsOpen,
    language: settings.language,
  }));

  useEffect(() => {
    i18n.changeLanguage(state.language);
  }, [state.language]);

  const blurredIfSettingsOpen = state.settingsOpen ? 'filter blur-sm' : '';

  return (
    <div>
      <div className={blurredIfSettingsOpen}>
        <AppBar />
        <Content />
        {/*<Footer />*/}
      </div>
      <Drawer
        isOpen={state.settingsOpen}
        setIsOpen={() => dispatch(toggleSettingsDrawer())}
      >
        <Settings />
      </Drawer>
    </div>
  );
}
