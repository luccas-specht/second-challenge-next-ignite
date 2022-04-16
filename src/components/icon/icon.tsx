import { IconProps } from './types';

import { wrapperAvailableIcon } from '../../assets/svg';

export const Icon = ({ name, color }: IconProps) =>
  wrapperAvailableIcon[name](color);
