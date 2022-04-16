import { Star, Clock } from 'react-feather';

import { MovieCardProps } from './types';

import styles from './styles.module.scss';

export const MovieCard = ({
  title,
  poster,
  rating,
  runtime,
}: MovieCardProps) => (
  <figure className={styles['movie-card']}>
    <img src={poster} alt={title} />
    <div>
      <footer className={styles['movie-info']}>
        <span>{title}</span>
        <div className={styles.meta}>
          <div>
            <Star /> {rating}
          </div>
          <div>
            <Clock /> {runtime}
          </div>
        </div>
      </footer>
    </div>
  </figure>
);
