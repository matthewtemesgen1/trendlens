import { supabase } from '../supabaseClient';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../api/tmdb';

function MovieDetail() {
  const { id } = useParams(); // gets the movie ID from URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(id)
      .then(res => setMovie(res.data))
      .catch(err => console.error('Error fetching movie:', err));
  }, [id]);

  const saveToFavorites = async () => {
    const { error } = await supabase.from('favorites').insert([
      {
        tmdb_id: movie.id.toString(),
        title: movie.title,
        poster_path: movie.poster_path,
      },
    ]);
  
    if (error) {
      console.error('Error saving to favorites:', error);
      alert('Failed to save');
    } else {
      alert('Movie saved to favorites!');
    }
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        style={{ borderRadius: '8px', marginBottom: '1rem' }}
      />
      <p><strong>Overview:</strong> {movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
      <button onClick={saveToFavorites} style={{ marginTop: '1rem' }}>
            Save to Favorites ⭐
      </button>
    </div>
  );
}

export default MovieDetail;