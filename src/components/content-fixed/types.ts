import { MovieProps } from '../../models';

export type ContentFixedProps = {
  title?: string;
  movies: MovieProps[];
  selectedGenreTitle: string;
};
