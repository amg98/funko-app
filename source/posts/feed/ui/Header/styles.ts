import {styled} from 'styled-components/native';

export const Container = styled.View`
  padding: ${({theme: {device}}) => device.safeTop + 21}px 16px 13px 26px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({theme: {colors}}) => colors.neutral95};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 14px;
`;
