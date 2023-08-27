import {RealmComment} from './Comment';
import {RealmUser} from './User';
import Realm from 'realm';

export class RealmPost extends Realm.Object<RealmPost> {
  id!: string;
  owner!: RealmUser;
  imageUrl!: string;
  description!: string;
  totalComments!: number;
  comments!: Realm.List<RealmComment>;

  static schema = {
    name: 'Post',
    primaryKey: 'id',
    properties: {
      id: 'string',
      owner: 'RealmUser',
      imageUrl: 'string',
      description: 'string',
      totalComments: 'int',
      comments: 'RealmComment[]',
    },
  };
}
