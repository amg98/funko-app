import {Me} from '../../auth/common/domain/me';
import {useQuery} from 'react-query';
import {QUERIES} from '../../../common/data/reactQuery';

export const useMe = () => {
  const {data: me} = useQuery<Me>(QUERIES.Me, {enabled: false});

  if (!me) {
    throw new Error('Me is not in cache');
  }

  return {
    me,
  };
};
