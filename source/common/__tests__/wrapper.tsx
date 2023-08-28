import {FC, ReactNode} from 'react';
import {MMKVContext} from '../data/mmkv';
import {QueryClient, QueryClientProvider} from 'react-query';
import {MMKV} from 'react-native-mmkv';

type Params = {
  mmkv?: MMKV;
  queryClient?: QueryClient;
};

export const appStateWrapper =
  ({
    mmkv = new MMKV(),
    queryClient = new QueryClient(),
  }: Params): FC<{children: ReactNode}> =>
  ({children}) =>
    (
      <MMKVContext.Provider value={mmkv}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </MMKVContext.Provider>
    );
