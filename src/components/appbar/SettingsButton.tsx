import { CogIcon } from '@heroicons/react/outline'
import { toggleSettingsDrawer } from '../../actions/settingsActions'
import { useDispatch } from 'react-redux'

export default function SettingsButton() {
    const dispatch = useDispatch()

    return (
        <a>
            <CogIcon
                onClick={() => dispatch(toggleSettingsDrawer())}
                className="w-8 h-8 text-white cursor-pointer" />
        </a>
    );
}