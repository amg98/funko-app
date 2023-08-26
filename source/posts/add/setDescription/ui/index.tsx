import {useTranslation} from 'react-i18next';
import {Screen} from '../../../../common/ui/components/Screen';
import type {Props} from './types';
import type {FC} from 'react';
import Header from '../../common/ui/Header';
import {Input, Row, SelectedImage} from './styles';

const PostDescription: FC<Props> = ({router, useViewModel}) => {
  const {image, description, canShare, onPressShare, setDescription} =
    useViewModel(router);
  const {t} = useTranslation();

  return (
    <Screen>
      <Header
        leftIcon="chevron-left"
        onPressLeft={router.goBack}
        title={t('new-post/title')}
        rightTitle={t('action/share')}
        rightDisabled={!canShare}
        onPressRightAsync={onPressShare}
      />
      <Row>
        <SelectedImage source={{uri: image.path}} />
        <Input
          value={description}
          onChangeText={setDescription}
          placeholder={t('new-post/description-placeholder')}
          multiline
        />
      </Row>
    </Screen>
  );
};

export default PostDescription;
