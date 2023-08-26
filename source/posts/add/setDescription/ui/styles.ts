import {Image} from 'expo-image';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {TEXT_STYLES} from '../../../../common/ui/components/Text/styles';

export const Row = styled.View`
  padding: 15px 16px 17px;
  gap: 22.63px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: ${({theme: {colors}}) => colors.neutral95};
`;

export const SelectedImage = styled(Image)`
  width: 110px;
  height: 122px;
`;

export const Input = styled(TextInput).attrs(({theme: {colors}}) => ({
  placeholderTextColor: colors.neutral0,
  selectionColor: colors.neutral0,
}))`
  ${TEXT_STYLES.body3};
  color: ${({theme: {colors}}) => colors.neutral0};
  padding: 0;
  height: 122px;
  flex: 1;
`;
