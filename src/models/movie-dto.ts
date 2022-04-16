export type Rating = {
  Source: string;
  Value: string;
};

export type MovieProps = {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Rating[];
  Runtime: string;
};
