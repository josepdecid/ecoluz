import { useAppDispatch, useAppSelector } from '../redux/reducers/store';

import AppBar from './appbar/AppBar';
import Content from './content/Content';
import Drawer from './misc/Drawer';

import Settings from './appbar/Settings';
import { toggleSettingsDrawer } from '../redux/actions/settingsActions';
import { FunctionComponent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const App: FunctionComponent = () => {
  const { i18n } = useTranslation();

  const dispatch = useAppDispatch();
  const state = useAppSelector(({ settings }) => ({
    settingsOpen: settings.settingsOpen,
    language: settings.language
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
      </div>
      <Drawer
        isOpen={state.settingsOpen}
        setIsOpen={() => dispatch(toggleSettingsDrawer())}
      >
        <Settings />
      </Drawer>
    </div>
  );
};

export default App;
