import React from 'react';

function About() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>About TrendLens 🎬</h1>
      <p>
        TrendLens is a movie discovery web app that uses The Movie Database (TMDb) API to help users find
        trending films, explore genres, and view detailed movie information.
      </p>
      <p>
        This app was built for a web development course project and demonstrates API integration, React development,
        and responsive web design.
      </p>
      <p>
        Data is fetched live from <a href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noopener noreferrer">TMDb's API</a>.
      </p>
    </div>
  );
}

export default About;