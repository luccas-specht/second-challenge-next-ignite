import { ButtonHTMLAttributes } from 'react';

export type IconName =
  | 'drama'
  | 'action'
  | 'comedy'
  | 'horror'
  | 'family'
  | 'documentary';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  iconName: IconName;
  selected: boolean;
};
