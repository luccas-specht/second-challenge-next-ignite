import { ContentFixed } from './content-fixed';
import { ContentFixedProps } from './content-fixed/types';

export const Content = ({ movies, selectedGenreTitle }: ContentFixedProps) => (
  <ContentFixed movies={movies} selectedGenreTitle={selectedGenreTitle} />
);
