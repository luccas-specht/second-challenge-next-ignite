import { ButtonHTMLAttributes } from 'react';

import { IconName } from '../../models';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  iconName: IconName;
  selected: boolean;
};
