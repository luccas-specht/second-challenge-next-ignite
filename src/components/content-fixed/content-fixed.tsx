import { useCallback } from 'react';

import { MovieCard } from '../movie-card';
import { ContentFixedProps } from './types';

import styles from './styles.module.scss';

export const ContentFixed = ({
  movies,
  title = 'Categoria:',
  selectedGenreTitle,
}: ContentFixedProps) => {
  const renderMoviesCard = useCallback(
    () =>
      movies.map(({ imdbID, Title, Poster, Ratings, Runtime }) => (
        <MovieCard
          key={imdbID}
          title={Title}
          poster={Poster}
          rating={Ratings[0].Value}
          runtime={Runtime}
        />
      )),
    [movies]
  );

  return (
    <div className={styles.container}>
      <header>
        <span className={styles.category}>
          {title}
          <span> {selectedGenreTitle}</span>
        </span>
      </header>
      <main>
        <div className={styles['movies-list']}>{renderMoviesCard()}</div>
      </main>
    </div>
  );
};
