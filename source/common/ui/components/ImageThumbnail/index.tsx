import type {Props} from './types';
import {Button, Image} from './styles';
import type {FC} from 'react';
import {memo} from 'react';
import useIdCallback from '../../utils/useIdCallback';

const ImageThumbnail: FC<Props> = ({
  id,
  imageUrl,
  size = 64,
  onPress,
  style,
}) => {
  const handlePress = useIdCallback(onPress, id);

  return (
    <Image size={size} source={{uri: imageUrl}} style={style}>
      <Button onPress={handlePress} />
    </Image>
  );
};

export default memo(ImageThumbnail);
