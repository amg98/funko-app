import {useState} from 'react';
import {Params} from './types';

const useViewModel = ({image, onClose}: Params) => {
  const [description, setDescription] = useState('');

  return {
    description,
    image,
    canShare: !!description,
    setDescription,
    onPressShare: async () => {},
  };
};

export default useViewModel;
