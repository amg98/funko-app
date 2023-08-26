import {ScreenComponent} from '../../types';
import PostDescription from '../../../../posts/add/setDescription/ui';
import useViewModel from '../../../../posts/add/setDescription/presentation';

const SetDescriptionScreen: ScreenComponent<'SetDescription'> = ({
  navigation,
  route,
}) => {
  return (
    <PostDescription
      useViewModel={useViewModel}
      router={{
        image: route.params.image,
        onClose: navigation.pop,
        goBack: navigation.goBack,
      }}
    />
  );
};

export default SetDescriptionScreen;
