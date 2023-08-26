import {TextInput} from 'react-native';
import {styled} from 'styled-components/native';
import Text from '../Text';
import {TEXT_STYLES} from '../Text/styles';

export const Container = styled.View`
  gap: 4px;
`;

export const Field = styled.View`
  flex-direction: row;
  border-radius: 6px;
  border-width: 1px;
  padding: 11px 8px 12px 16px;
  border-color: ${({theme: {colors}}) => colors.neutral95};
`;

export const Input = styled(TextInput).attrs(({theme: {colors}}) => ({
  placeholderTextColor: colors.neutral70,
  selectionColor: colors.neutral0,
}))`
  padding: 0;
  flex: 1;
  color: ${({theme: {colors}}) => colors.neutral0};
  ${TEXT_STYLES.body4};
`;

export const Title = styled(Text).attrs({
  variant: 'body1',
})`
  color: ${({theme: {colors}}) => colors.neutral0};
  padding-vertical: 6px;
`;
