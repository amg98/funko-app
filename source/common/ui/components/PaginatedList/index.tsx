import {useCallback, useMemo, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {Content, Footer, LoadingState} from './styles';
import type {Props} from './types';
import ScreenState from '../ScreenState';
import {useTranslation} from 'react-i18next';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const PaginatedList = <T,>({
  data,
  renderItem,
  onLoadNextPage,
  onRefetch,
  onPressEmptyStateButton,
  ...listProps
}: Props<T>) => {
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [loadingRefetch, setLoadingRefetch] = useState(false);

  const {t} = useTranslation();

  const handleLoadNextPage = useCallback(async () => {
    setLoadingNextPage(true);
    await onLoadNextPage();
    setLoadingNextPage(false);
  }, [onLoadNextPage]);

  const handleRefetch = useCallback(async () => {
    setLoadingRefetch(true);
    await onRefetch();
    setLoadingRefetch(false);
  }, [onRefetch]);

  const footer = useMemo(() => <Footer />, []);

  const {bottom: safeBottom} = useSafeAreaInsets();

  const listContainerStyle = useMemo(
    () => ({
      paddingBottom: safeBottom + 16,
    }),
    [safeBottom],
  );

  if (data.type === 'loading') {
    return (
      <LoadingState>
        <ActivityIndicator />
      </LoadingState>
    );
  }

  if (data.type === 'data' && !data.data.length) {
    return (
      <Content>
        <ScreenState
          description={t('hint/empty')}
          buttonTitle={t('action/try-again')}
          onPressButton={onPressEmptyStateButton}
        />
      </Content>
    );
  }

  if (data.type === 'error') {
    return <ScreenState description={data.message} onPressButton={onRefetch} />;
  }

  return (
    <FlatList
      data={data.data}
      renderItem={renderItem}
      refreshing={loadingRefetch}
      onRefresh={handleRefetch}
      onEndReached={handleLoadNextPage}
      contentContainerStyle={listContainerStyle}
      ListFooterComponent={loadingNextPage ? footer : undefined}
      {...listProps}
    />
  );
};

export default PaginatedList;
