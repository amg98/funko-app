import {Me} from '../../auth/common/domain/me';
import {useQueryClient} from 'react-query';
import {QUERIES} from '../../../common/data/reactQuery';

export const useMe = () => {
  const client = useQueryClient();

  const me = client.getQueryData<Me>(QUERIES.Me);

  if (!me) {
    throw new Error('Me is not in cache');
  }

  return {
    me,
  };
};
