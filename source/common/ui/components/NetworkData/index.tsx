import {ActivityIndicator} from 'react-native';
import {LoadingState} from './styles';
import type {Props} from './types';
import ScreenState from '../ScreenState';

const NetworkData = <T,>({data, renderData, onRefetch}: Props<T>) => {
  if (data.type === 'loading') {
    return (
      <LoadingState>
        <ActivityIndicator />
      </LoadingState>
    );
  }

  if (data.type === 'error') {
    return <ScreenState description={data.message} onPressButton={onRefetch} />;
  }

  return renderData(data.data);
};

export default NetworkData;
