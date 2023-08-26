import type {Props} from './types';
import {Container, Name, Row, Spacer, Title} from './styles';
import type {FC} from 'react';
import IconButton from '../../../../common/ui/components/IconButton';
import {useTranslation} from 'react-i18next';

const Header: FC<Props> = ({name, onGoBack}) => {
  const {t} = useTranslation();

  return (
    <Container>
      <Row>
        <IconButton icon="chevron-left" size={28} onPress={onGoBack} />
        <Title>{t('post/title')}</Title>
        <Spacer />
      </Row>
      <Name>{name}</Name>
    </Container>
  );
};

export default Header;
