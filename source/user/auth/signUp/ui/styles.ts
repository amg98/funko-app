import {styled} from 'styled-components/native';
import Text from '../../../../common/ui/components/Text';
import TextInput from '../../../../common/ui/components/TextInput';
import Button from '../../../../common/ui/components/Button';
import PasswordTextInput from '../../../../common/ui/components/PasswordTextInput';

export const Content = styled.ScrollView.attrs(({theme: {device}}) => ({
  contentContainerStyle: {
    paddingTop: device.safeTop + 37,
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

export const NameInput = styled(TextInput)`
  margin-top: 8px;
`;

export const SurnameInput = styled(TextInput)`
  margin-top: 19px;
`;

export const EmailInput = styled(TextInput)`
  margin-top: 13px;
`;

export const PasswordInput = styled(PasswordTextInput)`
  margin-top: 19px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  margin-bottom: 28px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 14px;
  align-items: center;
  margin-top: 26px;
`;

export const Label = styled(Text).attrs({
  variant: 'body1',
})`
  color: ${({theme: {colors}}) => colors.neutral0};
`;

export const Link = styled(Text).attrs({
  variant: 'body2',
})`
  color: ${({theme: {colors}}) => colors.neutral0};
`;
