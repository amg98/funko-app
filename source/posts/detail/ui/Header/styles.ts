import {styled} from 'styled-components/native';
import Text from '../../../../common/ui/components/Text';

export const Container = styled.View`
  padding: ${({theme: {device}}) => device.safeTop + 18}px 16px 5px;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const Title = styled(Text).attrs({
  variant: 'body4',
})`
  color: ${({theme: {colors}}) => colors.neutral50};
  flex: 1;
  text-align: center;
`;

export const Name = styled(Text).attrs({
  variant: 'body4',
})`
  color: ${({theme: {colors}}) => colors.neutral0};
`;

export const Spacer = styled.View`
  width: 28px;
  aspect-ratio: 1;
`;
