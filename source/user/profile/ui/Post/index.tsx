import type {Props} from './types';
import {Button, PostImage} from './styles';
import type {FC} from 'react';
import {memo} from 'react';
import useIdCallback from '../../../../common/ui/utils/useIdCallback';

const Post: FC<Props> = ({post, size = 64, onPress, style}) => {
  const handlePress = useIdCallback(onPress, post.id);

  return (
    <PostImage size={size} source={{uri: post.imageUrl}} style={style}>
      <Button onPress={handlePress} />
    </PostImage>
  );
};

export default memo(Post);
