import {createRealmContext} from '@realm/react';
import {RealmUser} from './User';
import {RealmPost} from './Post';
import {RealmComment} from './Comment';

const realmConfig: Realm.Configuration = {
  schema: [RealmUser, RealmPost, RealmComment],
};

export const {RealmProvider, useObject, useQuery, useRealm} =
  createRealmContext(realmConfig);
