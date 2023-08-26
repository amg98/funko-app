import {useCallback} from 'react';
import {ScreenComponent} from '../../types';
import ChoosePostImage from '../../../../posts/add/chooseImage/ui';
import useViewModel from '../../../../posts/add/chooseImage/presentation';
import {LocalImage} from '../../../../posts/add/common/domain/LocalImage';

const ChooseImageScreen: ScreenComponent<'ChooseImage'> = ({navigation}) => {
  const goToDescription = useCallback(
    (image: LocalImage) => {
      navigation.navigate('SetDescription', {image});
    },
    [navigation],
  );

  return (
    <ChoosePostImage
      useViewModel={useViewModel}
      router={{
        onClose: navigation.goBack,
        onPressNext: goToDescription,
      }}
    />
  );
};

export default ChooseImageScreen;
