import type {FC} from 'react';
import {Container} from './styles';
import type {Props} from './types';
import Icon from '../Icon';

const IconButton: FC<Props> = ({color, icon, size = 24, onPress, style}) => (
  <Container size={size} onPress={onPress} enabled={!!onPress} style={style}>
    <Icon name={icon} size={size} color={color} />
  </Container>
);

export default IconButton;
