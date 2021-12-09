import { CogIcon } from '@heroicons/react/outline';
import { toggleSettingsDrawer } from '../../actions/settingsActions';
import { useAppDispatch } from '../../reducers/store';

export default function SettingsButton() {
  const dispatch = useAppDispatch();

  return (
    <a>
      <CogIcon
        onClick={() => dispatch(toggleSettingsDrawer())}
        className="w-8 h-8 text-white cursor-pointer"
      />
    </a>
  );
}
