import { IconProps } from './types';

import { availableIcons } from '../../assets/svg';

export const Icon = ({ name, color }: IconProps) => availableIcons[name](color);
