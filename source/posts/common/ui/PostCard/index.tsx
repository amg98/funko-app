import type {Props} from './types';
import {
  Comments,
  Container,
  Content,
  Description,
  Header,
  PostImage,
  SeeComments,
  UserName,
} from './styles';
import Avatar from '../../../../common/ui/components/Avatar';
import useIdCallback from '../../../../common/ui/utils/useIdCallback';
import Comment from './Comment';
import {useTranslation} from 'react-i18next';
import {FC} from 'react';

const PostCard: FC<Props> = ({post, onPressComments, onPressProfile}) => {
  const handlePressOwner = useIdCallback(onPressProfile, post.owner.id);
  const handlePressComments = useIdCallback(onPressComments, post.id);
  const {t} = useTranslation();

  return (
    <Container>
      <Header>
        <Avatar size={31} uri={post.owner.avatar} onPress={handlePressOwner} />
        <UserName>{post.owner.name}</UserName>
      </Header>
      <PostImage source={{uri: post.imageUrl}} />
      <Content>
        <Description>{post.description}</Description>
        <Comments>
          {post.comments.map(it => (
            <Comment key={it.id} comment={it} onPressProfile={onPressProfile} />
          ))}
          <SeeComments onPress={handlePressComments}>
            {t('feed-card/see-comments', {count: post.totalComments})}
          </SeeComments>
        </Comments>
      </Content>
    </Container>
  );
};

export default PostCard;
