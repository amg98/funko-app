import {styled} from 'styled-components/native';
import Text from '../../../../common/ui/components/Text';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${({theme: {device}}) => device.safeTop + 14}px 16px 16.9px;
  gap: 16px;
`;

export const Spacer = styled.View`
  width: 28px;
  aspect-ratio: 1;
`;

export const User = styled.View`
  gap: 14.27px;
  align-items: center;
`;

export const UserName = styled(Text).attrs({
  variant: 'body2',
})`
  color: ${({theme: {colors}}) => colors.neutral0};
  font-size: 20.878px;
  line-height: 29.229px;
`;
