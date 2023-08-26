import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

export const Footer = styled(ActivityIndicator)`
  margin-top: 16px;
`;

export const LoadingState = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  margin-horizontal: 40px;
`;
