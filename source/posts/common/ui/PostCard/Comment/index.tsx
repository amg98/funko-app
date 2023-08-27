import type {Props} from './types';
import {Content, Owner} from './styles';
import type {FC} from 'react';
import useIdCallback from '../../../../../common/ui/utils/useIdCallback';

const Comment: FC<Props> = ({comment, onPressProfile, style}) => {
  const handlePressProfile = useIdCallback(onPressProfile, comment.user.id);

  return (
    <Content style={style}>
      <Owner
        onPress={
          handlePressProfile
        }>{`${comment.user.name} ${comment.user.surname}`}</Owner>{' '}
      {comment.content}
    </Content>
  );
};

export default Comment;
