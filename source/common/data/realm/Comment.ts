import {RealmUser} from './User';
import Realm from 'realm';

export class RealmComment extends Realm.Object<RealmComment> {
  id!: string;
  user!: RealmUser;
  content!: string;

  static schema = {
    name: 'RealmComment',
    primaryKey: 'id',
    properties: {
      id: 'string',
      user: 'RealmUser',
      content: 'string',
    },
  };
}
