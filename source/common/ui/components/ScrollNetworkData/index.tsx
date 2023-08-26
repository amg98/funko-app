import {RefreshControl} from 'react-native';
import {Content} from './styles';
import type {Props} from './types';
import {useCallback, useMemo, useState} from 'react';
import NetworkData from '../NetworkData';

const ScrollNetworkData = <T,>({
  data,
  onRefetch,
  onTryAgain,
  renderData,
}: Props<T>) => {
  const [refreshing, setRefreshing] = useState(false);

  const refetch = useCallback(async () => {
    setRefreshing(true);
    await onRefetch();
    setRefreshing(false);
  }, [onRefetch]);

  const refreshControl = useMemo(
    () => <RefreshControl refreshing={refreshing} onRefresh={refetch} />,
    [refetch, refreshing],
  );

  return (
    <Content refreshControl={refreshControl}>
      <NetworkData data={data} renderData={renderData} onRefetch={onTryAgain} />
    </Content>
  );
};

export default ScrollNetworkData;
