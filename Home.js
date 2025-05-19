import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../api/tmdb';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(res => setMovies(res.data.results))
      .catch(err => console.error('Error fetching trending movies:', err));
  }, []);

  return (
    <div>
      <h1>Trending Movies Today</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {movies.map(movie => (
          <div key={movie.id} style={{ width: '200px' }}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              style={{ width: '100%' }}
            />
            <h3>
                <a href={`/movie/${movie.id}`} style={{ color: '#61dafb' }}>
                {movie.title}
                </a>
            </h3>
            <p>⭐ {movie.vote_average}</p>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;