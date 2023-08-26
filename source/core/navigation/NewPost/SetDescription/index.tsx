import {ScreenComponent} from '../../types';
import PostDescription from '../../../../posts/add/setDescription/ui';
import useViewModel from '../../../../posts/add/setDescription/presentation';
import {useCallback} from 'react';

const SetDescriptionScreen: ScreenComponent<'SetDescription'> = ({
  navigation,
  route,
}) => {
  const onClose = useCallback(() => {
    navigation.getParent()?.goBack();
  }, [navigation]);

  return (
    <PostDescription
      useViewModel={useViewModel}
      router={{
        image: route.params.image,
        onClose,
        goBack: navigation.goBack,
      }}
    />
  );
};

export default SetDescriptionScreen;
