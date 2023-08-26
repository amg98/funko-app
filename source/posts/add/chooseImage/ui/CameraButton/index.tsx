import type {Props} from './types';
import {Button, Container, SelectedImage} from './styles';
import type {FC} from 'react';
import Icon from '../../../../../common/ui/components/Icon';

const CameraButton: FC<Props> = ({imageUrl, width, onPress, style}) => {
  return (
    <Container width={width} style={style}>
      {imageUrl ? (
        <SelectedImage width={width} source={{uri: imageUrl}} />
      ) : (
        <Icon name="camera" size={55} />
      )}
      <Button onPress={onPress} />
    </Container>
  );
};

export default CameraButton;
