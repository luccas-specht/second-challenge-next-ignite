import { useEffect, useState } from 'react';

import { api } from '../services';
import { SideBar, Content } from '../components';
import { GenreDTO, MovieProps } from '../models';

import '../styles/global.scss';

import styles from './styles.module.scss';

export const Home = () => {
  const [genres, setGenres] = useState([] as GenreDTO[]);
  const [movies, setMovies] = useState([] as MovieProps[]);
  const [selectedGenreTitle, setSelectedGenreTitle] = useState('');
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const handleClickButton = (id: number) => {
    setSelectedGenreId(id);
  };

  useEffect(() => {
    api.get<GenreDTO[]>('genres').then((response) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api.get<GenreDTO>(`genres/${selectedGenreId}`).then((response) => {
      setSelectedGenreTitle(response.data.title);
    });
  }, [selectedGenreId]);

  return (
    <div className={styles.home}>
      <SideBar
        genres={genres}
        selectedGenreId={selectedGenreId}
        handleClickButton={handleClickButton}
      />
      <Content movies={movies} selectedGenreTitle={selectedGenreTitle} />
    </div>
  );
};
