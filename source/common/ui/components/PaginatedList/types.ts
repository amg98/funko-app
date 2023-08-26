import type {FlatListProps, ListRenderItem} from 'react-native';
import {NetworkData} from '../../../domain/NetworkData';

export type Props<T> = Pick<
  FlatListProps<T>,
  'keyExtractor' | 'ItemSeparatorComponent'
> & {
  data: NetworkData<T[]>;
  onLoadNextPage: () => Promise<void>;
  onPressEmptyStateButton: () => Promise<void>;
  onRefetch: () => Promise<void>;
  renderItem: ListRenderItem<T>;
};
