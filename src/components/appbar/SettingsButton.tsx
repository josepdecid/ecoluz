import { CogIcon } from '@heroicons/react/outline';
import { FunctionComponent } from 'react';
import { toggleSettingsDrawer } from '../../redux/actions/settingsActions';
import { useAppDispatch } from '../../redux/reducers/store';

const SettingsButton: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  return (
    <a>
      <CogIcon
        onClick={() => dispatch(toggleSettingsDrawer())}
        className="w-8 h-8 text-white cursor-pointer"
      />
    </a>
  );
};

export default SettingsButton;
