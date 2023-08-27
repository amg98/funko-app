import {useCallback, useState} from 'react';
import {Params} from './types';
import {showError} from '../../../../common/ui/utils/error';
import {useAddPost} from '../../addPost/data';

const useViewModel = ({image, onClose}: Params) => {
  const {addPost} = useAddPost();
  const [description, setDescription] = useState('');

  const onPressShare = useCallback(async () => {
    try {
      await addPost({imagePath: image, description});
      onClose();
    } catch (error) {
      showError(error);
    }
  }, [addPost, description, image, onClose]);

  return {
    description,
    image,
    canShare: !!description,
    setDescription,
    onPressShare,
  };
};

export default useViewModel;
