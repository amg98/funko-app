import styled from 'styled-components/native';
import Text from '../../../../../common/ui/components/Text';
import TextButton from '../../../../../common/ui/components/TextButton';

export const Container = styled.View`
  padding: ${({theme: {device}}) => device.safeTop + 20}px 16px 13px;
  justify-content: space-between;
  gap: 8px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({theme: {colors}}) => colors.neutral95};
`;

export const Left = styled.View`
  flex: 1;
`;

export const Right = styled.View`
  flex: 1;
`;

export const Title = styled(Text).attrs({
  variant: 'body4',
})`
  color: ${({theme: {colors}}) => colors.neutral0};
  flex: 1.5;
  text-align: center;
`;

export const ActionButton = styled(TextButton).attrs(({theme: {colors}}) => ({
  textVariant: 'body6',
  textColor: colors.accent,
}))``;
