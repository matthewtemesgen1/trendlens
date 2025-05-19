import React, { useEffect, useState } from 'react';
import { fetchGenres, searchMovies } from '../api/tmdb';

function Explore() {
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchGenres()
      .then(res => setGenres(res.data.genres))
      .catch(err => console.error('Error fetching genres:', err));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    searchMovies(searchTerm)
      .then(res => setResults(res.data.results))
      .catch(err => console.error('Search error:', err));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Explore Movies 🔍</h1>

      <form onSubmit={handleSearch} style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ padding: '0.5rem', width: '300px', marginRight: '1rem' }}
        />
        <button type="submit">Search</button>
      </form>

      <h2>Genres</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {genres.map(g => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>

      <h2>Search Results</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {results.map(movie => (
          <div key={movie.id} style={{ width: '200px' }}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              style={{ width: '100%' }}
            />
            <h4>
                <a href={`/movie/${movie.id}`} style={{ color: '#61dafb' }}>
                    {movie.title}
                </a>
            </h4>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;