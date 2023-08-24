import {FC, useCallback, useState} from 'react';
import {Container, Loader, Title} from './styles';
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
    <Container
      disabled={disabled}
      enabled={!disabled && !loading}
      onPress={handlePress}
      style={style}>
      <Title loading={loading} disabled={disabled}>
        {title}
      </Title>
      {loading && <Loader color={colors.neutral100} />}
    </Container>
  );
};

export default Button;
