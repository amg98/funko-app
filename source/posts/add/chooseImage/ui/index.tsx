import {useTranslation} from 'react-i18next';
import {Screen} from '../../../../common/ui/components/Screen';
import type {Props} from './types';
import {useMemo, useCallback, FC} from 'react';
import Header from '../../common/ui/Header';
import {CameraButton, Post, Separator} from './styles';
import {useTheme} from 'styled-components/native';
import {ListRenderItemInfo} from 'react-native';
import PaginatedList from '../../../../common/ui/components/PaginatedList';
import {LocalImage} from '../../common/domain/LocalImage';

const ChoosePostImage: FC<Props> = ({router, useViewModel}) => {
  const {
    images,
    selectedImage,
    onLoadNextPage,
    onOpenCamera,
    onPressNext,
    onRefetch,
    onChooseImage,
    onTryAgain,
  } = useViewModel({goNext: router.onPressNext});
  const {t} = useTranslation();
  const {device} = useTheme();

  const header = useMemo(
    () => (
      <CameraButton
        width={device.width - 90}
        imageUrl={selectedImage?.path ?? null}
        onPress={onOpenCamera}
      />
    ),
    [device.width, onOpenCamera, selectedImage?.path],
  );

  const renderItem = useCallback(
    ({index, item}: ListRenderItemInfo<LocalImage>) => (
      <Post
        id={item.path}
        imageUrl={item.path}
        onPress={onChooseImage}
        withRightSeparator={(index + 1) % 3 !== 0}
      />
    ),
    [onChooseImage],
  );

  return (
    <Screen>
      <Header
        leftIcon="cross"
        onPressLeft={router.onClose}
        title={t('new-post/title')}
        rightTitle={t('action/next')}
        rightDisabled={!selectedImage}
        onPressRight={onPressNext}
      />
      <PaginatedList
        data={images}
        onLoadNextPage={onLoadNextPage}
        onRefetch={onRefetch}
        onPressEmptyStateButton={onTryAgain}
        renderItem={renderItem}
        numColumns={3}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={header}
      />
    </Screen>
  );
};

export default ChoosePostImage;
