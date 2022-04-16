import { GenreDTO } from '../../models/genre-dto';

export type Props = {
  genres: GenreDTO[];
  selectedGenreId: number;
  handleClickButton(id: number): void;
};
