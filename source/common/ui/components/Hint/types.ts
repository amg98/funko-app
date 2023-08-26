import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  title: string;
  subtitle: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};
