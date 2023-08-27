import {useQuery} from '../../../common/data/realm';
import {RealmUser} from '../../../common/data/realm/User';
import {useMemo} from 'react';
import {Me} from '../domain';

const mapToDomain = (user: RealmUser): Me => ({
  id: user.id,
  name: user.name,
  surname: user.surname,
  avatar: user.avatar,
});

export const useMe = () => {
  const users = useQuery(RealmUser);

  const me = useMemo(() => {
    return mapToDomain(users.filter(it => it.isLoggedUser)[0]);
  }, [users]);

  return {
    me,
  };
};
