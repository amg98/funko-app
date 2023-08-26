import type {Props} from './types';
import {Container, Link} from './styles';
import type {FC} from 'react';

const Hint: FC<Props> = ({title, subtitle, onPress, style}) => {
  return (
    <Container style={style}>
      {title} <Link onPress={onPress}>{subtitle}</Link>
    </Container>
  );
};

export default Hint;
