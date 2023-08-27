import {useCallback, useEffect} from 'react';
import notifee from '@notifee/react-native';
import type {Notification} from '@notifee/react-native';
import {AppState} from 'react-native';
import type {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import messaging from '@react-native-firebase/messaging';
import {ANDROID_CHANNEL_ID, useNotificationChannels} from './channel';
import {
  hasNotificationsPermission,
  requestNotificationsPermission,
} from './permission';
import {NEW_POST_TOPIC} from './topic';

const normalizeBackendNotificationForNotifee = (
  fcmNotification: FirebaseMessagingTypes.Notification,
): Notification => {
  const {title, body, ios} = fcmNotification;

  return {
    title,
    body,
    ios: {
      badgeCount: ios?.badge !== undefined ? parseInt(ios.badge, 10) : 0,
    },
    android: {
      channelId: ANDROID_CHANNEL_ID,
      pressAction: {
        id: 'default',
      },
    },
  };
};

const onMessageReceived = async (
  message: FirebaseMessagingTypes.RemoteMessage,
) => {
  if (AppState.currentState !== 'active') {
    return;
  }

  const {data, notification} = message;
  if (!notification) {
    return;
  }

  delete data?.fcm_options;

  await notifee.displayNotification({
    ...normalizeBackendNotificationForNotifee(notification),
    data,
  });
};

export const setupPushNotifications = () => {
  messaging().setBackgroundMessageHandler(onMessageReceived);
};

const setupForegroundPushNotifications = () => {
  const unsubscribe = messaging().onMessage(onMessageReceived);

  return () => {
    unsubscribe();
  };
};

export const useNotificationsEffect = () => {
  useEffect(() => {
    const unsubscribe = setupForegroundPushNotifications();
    return unsubscribe;
  }, []);

  useNotificationChannels();

  useEffect(() => {
    (async () => {
      if (await hasNotificationsPermission()) {
        return;
      }
      await requestNotificationsPermission();
    })();
  }, []);

  const handleSubscribeToTopic = useCallback(async () => {
    try {
      await messaging().subscribeToTopic(NEW_POST_TOPIC);
    } catch {}
  }, []);

  const handleUnsubscribeToTopic = useCallback(async () => {
    try {
      await messaging().unsubscribeFromTopic(NEW_POST_TOPIC);
    } catch {}
  }, []);

  useEffect(() => {
    handleSubscribeToTopic();
    return () => {
      handleUnsubscribeToTopic();
    };
  }, [handleSubscribeToTopic, handleUnsubscribeToTopic]);
};
