import {TextInput} from 'react-native';
import {styled} from 'styled-components/native';
import Text from '../Text';

export const Container = styled.View`
  gap: 4px;
`;

export const Field = styled.View`
  flex-direction: row;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({theme: {colors}}) => colors.neutral95};
`;

export const Input = styled(TextInput).attrs(({theme: {colors}}) => ({
  placeholderTextColor: colors.neutral70,
  cursorColor: colors.neutral0,
}))`
  padding: 0;
  flex: 1;
  color: ${({theme: {colors}}) => colors.neutral0};
`;

export const Title = styled(Text).attrs({
  variant: 'body1',
})`
  color: ${({theme: {colors}}) => colors.neutral0};
`;
