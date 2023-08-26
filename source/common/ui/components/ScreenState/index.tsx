import type {FC} from 'react';
import {Container, Description, Title, ActionButton} from './styles';
import type {Props} from './types';

const ScreenState: FC<Props> = ({
  description,
  buttonTitle,
  title,
  onPressButton,
  style,
}) => (
  <Container style={style}>
    {title && <Title>{title}</Title>}
    <Description>{description}</Description>
    {buttonTitle && onPressButton && (
      <ActionButton title={buttonTitle} onPressAsync={onPressButton} />
    )}
  </Container>
);

export default ScreenState;
