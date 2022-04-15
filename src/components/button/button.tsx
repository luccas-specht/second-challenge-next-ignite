import { Icon } from '../icon';

import '../../styles/button.scss';

import { ButtonProps } from './types';

export const Button = ({ iconName, title, selected, ...rest }: ButtonProps) => (
  <button type="button" {...(selected && { className: 'selected' })} {...rest}>
    <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
    {title}
  </button>
);
