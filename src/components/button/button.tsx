import { useMemo } from 'react';
import { Icon } from '../icon';

import styles from './style.module.scss';

import { ButtonProps } from './types';

export const Button = ({ iconName, title, selected, ...rest }: ButtonProps) => {
  const color = {
    default: '#FBFBFB',
    selected: '#FAE800',
  };

  return (
    <button
      type="button"
      className={
        selected ? `${styles.button} ${styles.selected}` : styles.button
      }
      {...rest}
    >
      <Icon name={iconName} color={selected ? color.selected : color.default} />
      {title}
    </button>
  );
};
