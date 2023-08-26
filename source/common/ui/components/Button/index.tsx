import {FC, useCallback, useState} from 'react';
import {Container, Loader, StyledButton, Title} from './styles';
import {Props} from './types';
import {useTheme} from 'styled-components/native';

const Button: FC<Props> = ({
  title,
  disabled = false,
  onPress,
  onPressAsync,
  style,
}) => {
  const [loading, setLoading] = useState(false);
  const {colors} = useTheme();

  const handlePress = useCallback(async () => {
    if (onPressAsync) {
      setLoading(true);
      await onPressAsync();
      setLoading(false);
    } else {
      onPress?.();
    }
  }, [onPress, onPressAsync]);

  return (
    <Container disabled={disabled} style={style}>
      <StyledButton onPress={handlePress} enabled={!disabled && !loading}>
        <Title loading={loading} disabled={disabled}>
          {title}
        </Title>
        {loading && <Loader color={colors.neutral100} />}
      </StyledButton>
    </Container>
  );
};

export default Button;
