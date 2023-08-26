import styled from 'styled-components/native';
import Button from '../Button';
import Text from '../Text';

export const Container = styled.View`
  align-items: center;
  flex: 1;
`;

export const Title = styled(Text).attrs({variant: 'bodyStrongLarge'})`
  margin: 4px 0 8px;
`;

export const Description = styled(Text).attrs({variant: 'body1'})`
  text-align: center;
`;

export const ActionButton = styled(Button)`
  margin-top: 16px;
`;
