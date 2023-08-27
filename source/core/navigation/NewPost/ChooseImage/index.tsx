import {useCallback} from 'react';
import {ScreenComponent} from '../../types';
import ChoosePostImage from '../../../../posts/add/chooseImage/ui';
import useViewModel from '../../../../posts/add/chooseImage/presentation';

const ChooseImageScreen: ScreenComponent<'ChooseImage'> = ({navigation}) => {
  const goToDescription = useCallback(
    (image: string) => {
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
