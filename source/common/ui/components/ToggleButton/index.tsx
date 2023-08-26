import type {Props} from './types';
import type {FC} from 'react';
import {memo, useCallback} from 'react';
import IconButton from '../IconButton';

const ToggleButton: FC<Props> = ({active, onChange}) => {
  const toggle = useCallback(() => {
    onChange(!active);
  }, [active, onChange]);

  return (
    <IconButton
      icon={active ? 'checkbox-on' : 'radio-off'}
      size={20}
      onPress={toggle}
    />
  );
};

export default memo(ToggleButton);
