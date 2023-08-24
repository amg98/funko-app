import type {FC} from 'react';
import type {IconProps} from './types';
import RadioOff from './RadioOff';
import AddSquare from './AddSquare';
import Camera from './Camera';
import CheckboxOn from './CheckboxOn';
import ChevronLeft from './ChevronLeft';
import Hidden from './Hidden';
import Logo from './Logo';
import Visible from './Visible';
import UserCircle from './UserCircle';
import Cross from './Cross';

const createSvgIcons = <T extends {[name: string]: FC<IconProps>}>(
  cfg: T,
): Record<keyof T, FC<IconProps>> => cfg;

export const icons = createSvgIcons({
  'radio-off': RadioOff,
  'add-square': AddSquare,
  camera: Camera,
  'checkbox-on': CheckboxOn,
  'chevron-left': ChevronLeft,
  hidden: Hidden,
  logo: Logo,
  'user-circle': UserCircle,
  visible: Visible,
  cross: Cross,
});
