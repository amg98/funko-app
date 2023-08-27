import {useCallback} from 'react';
import {AppError} from '../../../../common/domain/AppError';
import {t} from 'i18next';
import {sendPushNotification} from '../../../../notifications/data/sendNotification';
import {NEW_POST_TOPIC} from '../../../../notifications/data/topic';
import {createPost, uploadImage} from './remote';
import {randomUUID} from 'expo-crypto';
import {useMe} from '../../../../user/me/data';
import {useFeedLocalDataSource} from '../../../common/data/feedLocalDataSource';

type Input = {
  imagePath: string;
  description: string;
};

export const useAddPost = () => {
  const {me} = useMe();
  const {invalidate: invalidateFeed} = useFeedLocalDataSource();

  const addPost = useCallback(
    async ({imagePath, description}: Input) => {
      try {
        const imageUrl = await uploadImage(imagePath);

        await createPost({
          id: randomUUID(),
          description,
          imageUrl,
          ownerId: me.id,
        });

        sendPushNotification({
          title: '',
          subtitle: `${me.name} ${me.surname} uploaded a new post: '${description}'`,
          topic: NEW_POST_TOPIC,
        });

        invalidateFeed();
      } catch {
        throw new AppError(t('alert/unknown-error'));
      }
    },
    [invalidateFeed, me.id, me.name, me.surname],
  );

  return {addPost};
};
