import {createRealmContext} from '@realm/react';
import {RealmUser} from './User';

const realmConfig: Realm.Configuration = {
  schema: [RealmUser],
};

export const {RealmProvider, useObject, useQuery, useRealm} =
  createRealmContext(realmConfig);
