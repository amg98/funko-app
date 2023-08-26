import type {Props} from './types';
import {Container, Row} from './styles';
import type {FC} from 'react';
import Icon from '../../../../common/ui/components/Icon';
import IconButton from '../../../../common/ui/components/IconButton';

const Header: FC<Props> = ({onPressMyProfile, onPressNewPost}) => {
  return (
    <Container>
      <Icon name="logo" />
      <Row>
        <IconButton icon="add-square" size={29} onPress={onPressNewPost} />
        <IconButton icon="user-circle" size={29} onPress={onPressMyProfile} />
      </Row>
    </Container>
  );
};

export default Header;
