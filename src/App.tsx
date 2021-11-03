import { useDispatch, useSelector } from 'react-redux'

import AppBar from './components/appbar/AppBar'
import Content from './components/content/Content'
import Drawer from './components/misc/Drawer'
import Settings from './components/content/settings/Settings'
import { toggleSettingsDrawer } from './actions/settingsActions'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function App() {
    const { i18n } = useTranslation();

    const dispatch = useDispatch();
    const state = useSelector(({ settings }) => ({
        settingsOpen: settings.settingsOpen,
        language: settings.language
    }));

    useEffect(() => {
        i18n.changeLanguage(state.language);
    }, [state.language]);

    const blurredIfSettingsOpen = state.settingsOpen ? 'filter blur-sm' : ''

    return (
        <>
            <div className={blurredIfSettingsOpen}>
                <AppBar />
                <Content />
            </div>
            <Drawer isOpen={state.settingsOpen} setIsOpen={() => dispatch(toggleSettingsDrawer())}>
                <Settings />
            </Drawer>
        </>
    );
}