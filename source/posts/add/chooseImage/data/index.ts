import {
  PermissionStatus,
  getAssetInfoAsync,
  getAssetsAsync,
  getPermissionsAsync,
  isAvailableAsync,
  requestPermissionsAsync,
} from 'expo-media-library';
import {AppError} from '../../../../common/domain/AppError';
import {t} from 'i18next';
import {LocalImage} from '../../common/domain/LocalImage';
import {
  MediaTypeOptions,
  launchCameraAsync,
  requestCameraPermissionsAsync,
} from 'expo-image-picker';

export const fetchImages = async (
  lastImageId: string | null,
  pageSize: number,
): Promise<LocalImage[]> => {
  try {
    const isAvailable = await isAvailableAsync();
    if (!isAvailable) {
      return [];
    }

    const {granted} = await getPermissionsAsync();
    if (!granted) {
      const {granted: isGranted} = await requestPermissionsAsync();
      if (!isGranted) {
        return [];
      }
    }

    const {assets} = await getAssetsAsync({
      after: lastImageId ?? undefined,
      first: pageSize,
      mediaType: 'photo',
      sortBy: 'creationTime',
    });

    const mediaItemsInfo = await Promise.all(
      assets.map(({id}) => getAssetInfoAsync(id)),
    );

    return mediaItemsInfo
      .filter(({localUri}) => !!localUri)
      .map(({id, localUri}) => ({id, path: localUri ?? ''}));
  } catch {
    throw new AppError(t('alert/unknown-error'));
  }
};

export const getImageFromCamera = async () => {
  const {status} = await requestCameraPermissionsAsync();
  if (status !== PermissionStatus.GRANTED) {
    return null;
  }

  const response = await launchCameraAsync({
    allowsEditing: true,
    allowsMultipleSelection: false,
    mediaTypes: MediaTypeOptions.Images,
  });
  if (response.canceled) {
    return null;
  }

  return response.assets[0].uri;
};
