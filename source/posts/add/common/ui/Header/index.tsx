import type {Props} from './types';
import {ActionButton, Container, Left, Right, Title} from './styles';
import type {FC} from 'react';
import IconButton from '../../../../../common/ui/components/IconButton';

const Header: FC<Props> = ({
  leftIcon,
  title,
  rightTitle,
  rightDisabled = false,
  onPressLeft,
  onPressRight,
  onPressRightAsync,
}) => {
  return (
    <Container>
      <Left>
        <IconButton icon={leftIcon} size={28} onPress={onPressLeft} />
      </Left>
      <Title>{title}</Title>
      <Right>
        {!rightDisabled && (
          <ActionButton
            title={rightTitle}
            onPress={onPressRight}
            onPressAsync={onPressRightAsync}
          />
        )}
      </Right>
    </Container>
  );
};

export default Header;
