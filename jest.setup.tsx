import nock from 'nock';

jest.mock('@react-native-firebase/app', () => ({}));
jest.mock('@react-native-firebase/firestore', () => ({}));
jest.mock('expo-media-library', () => ({}));
jest.mock('expo-image-picker', () => ({}));
jest.mock('expo-crypto', () => ({
  randomUUID: jest.fn().mockReturnValue('123'),
}));
jest.mock('@react-native-firebase/storage', () => ({}));
jest.mock('@react-native-firebase/messaging', () => ({}));
jest.mock('@notifee/react-native', () => ({}));

nock.disableNetConnect();
