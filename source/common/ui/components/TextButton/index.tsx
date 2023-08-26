import type {FC} from 'react';
import React, {useCallback, useState} from 'react';
import {Container, Loader, Main, Title} from './styles';
import type {Props} from './types';
import {colors} from '../../theme/colors';

const TextButton: FC<Props> = ({
  title,
  textColor = colors.neutral0,
  textVariant = 'body1',
  onPress,
  onPressAsync,
  style,
}) => {
  const [loading, setLoading] = useState(false);

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
    <Container style={style}>
      <Main onPress={handlePress} enabled={!!onPress || !!onPressAsync}>
        <Title loading={loading} variant={textVariant} color={textColor}>
          {title}
        </Title>
        {loading && <Loader color={textColor} />}
      </Main>
    </Container>
  );
};

export default TextButton;
