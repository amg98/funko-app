import type {Props} from './types';
import {Container, Spacer, User, UserName} from './styles';
import type {FC} from 'react';
import IconButton from '../../../../common/ui/components/IconButton';
import Avatar from '../../../../common/ui/components/Avatar';

const Header: FC<Props> = ({user, onGoBack}) => {
  return (
    <Container>
      <IconButton icon="chevron-left" size={28} onPress={onGoBack} />
      {user.type === 'data' && (
        <User>
          <Avatar size={88.73} uri={user.data.avatar} />
          <UserName>{user.data.name}</UserName>
        </User>
      )}
      <Spacer />
    </Container>
  );
};

export default Header;
