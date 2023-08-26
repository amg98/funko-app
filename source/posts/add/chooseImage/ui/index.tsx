import {useTranslation} from 'react-i18next';
import {Screen} from '../../../../common/ui/components/Screen';
import type {Props} from './types';
import type {FC} from 'react';
import Header from '../../common/ui/Header';

const ChoosePostImage: FC<Props> = ({router, useViewModel}) => {
  const {
    images,
    selectedImage,
    onLoadNextPage,
    onOpenCamera,
    onPressNext,
    onRefetch,
    onTryAgain,
  } = useViewModel({goNext: router.onPressNext});
  const {t} = useTranslation();

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
    </Screen>
  );
};

export default ChoosePostImage;
