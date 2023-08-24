import type {FC} from 'react';
import {Container, Image} from './styles';
import type {Props} from './types';

const Avatar: FC<Props> = ({uri, size, onPress, style}) => (
  <Container onPress={onPress} enabled={!!onPress} style={style}>
    <Image size={size} source={uri} />
  </Container>
);

export default Avatar;
