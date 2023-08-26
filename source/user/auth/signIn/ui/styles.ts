import {styled} from 'styled-components/native';
import Text from '../../../../common/ui/components/Text';
import TextInput from '../../../../common/ui/components/TextInput';
import Button from '../../../../common/ui/components/Button';
import PasswordTextInput from '../../../../common/ui/components/PasswordTextInput';

export const Content = styled.ScrollView.attrs(({theme: {device}}) => ({
  contentContainerStyle: {
    paddingTop: device.safeTop + 99,
    paddingHorizontal: 20,
    paddingBottom: device.safeBottom + 16,
  },
  alwaysBounceVertical: false,
}))``;

export const Title = styled(Text).attrs({
  variant: 'header4',
})`
  color: ${({theme: {colors}}) => colors.neutral0};
  align-self: center;
`;

export const EmailInput = styled(TextInput)`
  margin-top: 33px;
`;

export const PasswordInput = styled(PasswordTextInput)`
  margin-top: 19px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 24px;
  margin-bottom: 30px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const Remember = styled.View`
  flex-direction: row;
  gap: 9px;
  align-items: center;
`;

export const Label = styled(Text).attrs({
  variant: 'body1',
})`
  color: ${({theme: {colors}}) => colors.neutral0};
`;
