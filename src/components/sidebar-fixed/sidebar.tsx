import { useCallback } from 'react';

import { Props } from './types';
import { Logo, Button } from '..';

import styles from './styles.module.scss';

export const SideBarFixed = ({
  genres,
  selectedGenreId,
  handleClickButton,
}: Props) => {
  const renderGenreButtons = useCallback(
    () =>
      genres.map(({ id, name, title }) => (
        <Button
          key={String(id)}
          title={title}
          iconName={name}
          onClick={() => handleClickButton(id)}
          selected={selectedGenreId === id}
        />
      )),
    [genres, selectedGenreId, handleClickButton]
  );

  return (
    <nav className={styles.sidebar}>
      <Logo />
      <div className={styles['buttons-container']}>{renderGenreButtons()}</div>
    </nav>
  );
};
