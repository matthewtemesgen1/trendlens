import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const { data, error } = await supabase.from('favorites').select('*');
      if (error) {
        console.error('Error fetching favorites:', error);
      } else {
        setFavorites(data);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Your Favorite Movies ❤️</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet! Go save some movies.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {favorites.map(movie => (
            <div key={movie.id} style={{ width: '200px' }}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '100%' }}
              />
              <h4>{movie.title}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;