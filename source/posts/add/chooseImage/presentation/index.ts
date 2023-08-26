import {useCallback, useState} from 'react';
import {NetworkData} from '../../../../common/domain/NetworkData';
import {LocalImage} from '../../common/domain/LocalImage';
import {Params} from './types';

const useViewModel = ({goNext}: Params) => {
  const [selectedImage, setSelectedImage] = useState<LocalImage | null>(null);

  const onPressNext = useCallback(() => {
    if (!selectedImage) {
      return;
    }
    goNext(selectedImage);
  }, [goNext, selectedImage]);

  return {
    selectedImage,
    images: {
      type: 'data',
      data: new Array(20).fill(0).map((_, index) => ({
        path: `https://picsum.photos/200?${index}`,
      })),
    } as NetworkData<LocalImage[]>,
    onLoadNextPage: async () => {},
    onRefetch: async () => {},
    onTryAgain: async () => {},
    onOpenCamera: () => {},
    onChooseImage: (path: string) => {},
    onPressNext,
  };
};

export default useViewModel;
