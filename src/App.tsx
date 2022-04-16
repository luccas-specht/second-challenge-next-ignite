import { useEffect, useState } from 'react';

import { SideBar, MovieCard } from './components';

// import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

import { GenreDTO, MovieProps } from './models';

export function App() {
  const [genres, setGenres] = useState([] as GenreDTO[]);
  const [movies, setMovies] = useState([] as MovieProps[]);
  const [selectedGenreTitle, setSelectedGenreTitle] = useState('');
  const [selectedGenreId, setSelectedGenreId] = useState(1);

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

  const handleClickButton = (id: number) => {
    setSelectedGenreId(id);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        genres={genres}
        handleClickButton={handleClickButton}
        selectedGenreId={selectedGenreId}
      />

      <div className="container">
        <header>
          <span className="category">
            Categoria:<span> {selectedGenreTitle}</span>
          </span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
