import Realm from 'realm';

export class RealmUser extends Realm.Object<RealmUser> {
  id!: string;
  name!: string;
  surname!: string;
  avatar!: string | null;
  isLoggedUser!: boolean;

  static schema = {
    name: 'RealmUser',
    properties: {
      id: 'string',
      name: 'string',
      surname: 'string',
      avatar: 'string?',
      isLoggedUser: 'bool',
    },
    primaryKey: 'id',
  };
}
