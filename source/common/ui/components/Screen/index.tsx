import styled from 'styled-components/native';

export const Screen = styled.View`
  flex: 1;
  background-color: ${({theme: {colors}}) => colors.neutral100};
`;
