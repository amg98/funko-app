import {useEffect} from 'react';
import notifee from '@notifee/react-native';
import {useTranslation} from 'react-i18next';

export const ANDROID_CHANNEL_ID = 'default';

export const useNotificationChannels = () => {
  const {t} = useTranslation();

  useEffect(() => {
    notifee.createChannel({
      id: ANDROID_CHANNEL_ID,
      name: t('notifications/channel-name'),
      sound: 'default',
    });
  }, [t]);
};
