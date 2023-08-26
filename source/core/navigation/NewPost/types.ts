import {Props as SetDescriptionProps} from '../../../posts/add/setDescription/ui/types';

export type NewPostParamList = {
  NewPost: undefined;
  ChooseImage: undefined;
  SetDescription: Pick<SetDescriptionProps['router'], 'image'>;
};
