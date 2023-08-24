import {Text} from 'react-native';
import styled, {css} from 'styled-components/native';
import {StyledTextProps, Variant} from './types';
import {RuleSet} from 'styled-components/native/dist/types';

const FONTS = {
  MontserratRegular: 'Montserrat Regular',
  MontserratSemiBold: 'Montserrat SemiBold',
};

const TEXT_STYLES: Record<Variant, RuleSet<object>> = {
  header4: css`
    font-family: ${FONTS.MontserratSemiBold};
    font-size: 22px;
    line-height: 29.04px;
    letter-spacing: 0.02px;
  `,
  body1: css`
    font-family: ${FONTS.MontserratRegular};
    font-size: 12px;
    line-height: 16.8px;
    letter-spacing: 0.45px;
  `,
  body2: css`
    font-family: ${FONTS.MontserratSemiBold};
    font-size: 12px;
    line-height: 14.4px;
    letter-spacing: 0.45px;
  `,
  body3: css`
    font-family: ${FONTS.MontserratRegular};
    font-size: 14px;
    line-height: 19.6px;
    letter-spacing: 0.3px;
  `,
  body4: css`
    font-family: ${FONTS.MontserratSemiBold};
    font-size: 14px;
    line-height: 18.2px;
    letter-spacing: 0.3px;
  `,
  body6: css`
    font-family: ${FONTS.MontserratSemiBold};
    font-size: 16px;
    line-height: 22.4px;
    letter-spacing: 0.2px;
  `,
  bodyStrongLarge: css`
    font-family: ${FONTS.MontserratSemiBold};
    font-size: 16px;
    line-height: 22.4px;
    letter-spacing: 0.2px;
  `,
};

export const StyledText = styled(Text)<StyledTextProps>`
  color: ${({theme: {colors}}) => colors.neutral0};
  ${({variant}) => TEXT_STYLES[variant]};
`;
