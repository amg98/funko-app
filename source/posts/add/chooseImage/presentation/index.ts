import {useCallback, useEffect, useRef, useState} from 'react';
import {NetworkData} from '../../../../common/domain/NetworkData';
import {LocalImage} from '../../common/domain/LocalImage';
import {Params} from './types';
import {fetchImages, getImageFromCamera} from '../data';
import {AppError} from '../../../../common/domain/AppError';
import {showError} from '../../../../common/ui/utils/error';

const useViewModel = ({goNext}: Params) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [images, setImages] = useState<NetworkData<LocalImage[]>>({
    type: 'loading',
  });
  const loadingImages = useRef(false);

  const onPressNext = useCallback(() => {
    if (!selectedImage) {
      return;
    }
    goNext(selectedImage);
  }, [goNext, selectedImage]);

  const onChooseImage = useCallback((path: string) => {
    setSelectedImage(path);
  }, []);

  const getImages = useCallback(async (lastImageId: string | null) => {
    try {
      if (loadingImages.current) {
        return;
      }
      loadingImages.current = true;

      const newImages = await fetchImages(lastImageId);
      setImages(prev => ({
        type: 'data',
        data: [...(prev.type === 'data' ? prev.data : []), ...newImages],
      }));
    } catch (error) {
      setImages({type: 'error', message: (error as AppError).message});
    } finally {
      loadingImages.current = false;
    }
  }, []);

  useEffect(() => {
    getImages(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefetch = useCallback(async () => {
    await getImages(null);
  }, [getImages]);

  const onLoadNextPage = useCallback(async () => {
    const lastImageId = images.type === 'data' ? images.data?.[0]?.id : null;
    await getImages(lastImageId);
  }, [getImages, images]);

  const onOpenCamera = useCallback(async () => {
    try {
      const cameraImage = await getImageFromCamera();
      if (!cameraImage) {
        return;
      }
      setSelectedImage(cameraImage);
    } catch (error) {
      showError(error);
    }
  }, []);

  return {
    selectedImage,
    images,
    onLoadNextPage,
    onRefetch: handleRefetch,
    onOpenCamera,
    onChooseImage,
    onPressNext,
  };
};

export default useViewModel;
