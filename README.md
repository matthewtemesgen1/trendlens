# TrendLens (Movies Edition)
TrendLens is a web application that allows users to explore trending movies, search for specific titles, browse by genre, and view detailed information for individual films. The application uses The Movie Database (TMDb) API to fetch real-time movie data and Supabase to manage a user-generated favorites list. Built with React, the project demonstrates dynamic front-end rendering, third-party API integration, and basic back-end functionality with a cloud-based database.

Target Browsers
This application is optimized for use on the latest versions of Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari. It is also compatible with mobile devices running iOS and Android.

Developer Manual

This documentation is intended for any future developers who may work on or extend the TrendLens project. I developed this application independently as part of a web development course. It uses React on the frontend, the TMDb API for movie data, and Supabase for backend data storage.

Installation and Setup

To run this application locally, follow the steps below:

Clone the repository:
git clone https://github.com/matthewtemesgen1/trendlens.git
cd trendlens
Install all dependencies:
npm install
Create a .env file in the root directory with the following variables:
REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_KEY=your-anon-key
Start the development server:
npm start
The app will be available at http://localhost:3000
Testing

No tests were written for this version of the project. Future developers are encouraged to add unit and integration tests using tools such as Jest and React Testing Library. After setup, tests can be run using the command:
npm test

API Information

This application uses both TMDb and Supabase for data.

TMDb Endpoints Used:

GET /trending/movie/day: fetches trending movies
GET /search/movie?query={query}: searches for movies by title
GET /movie/{id}: fetches movie details
GET /genre/movie/list: returns all available genres
Supabase Endpoints Used:

GET favorites: retrieves all saved favorite movies
POST favorites: adds a movie to the favorites table
All API calls are handled on the frontend using axios for TMDb and the Supabase JavaScript client for database interaction.

Known Bugs

No authentication: all users access a shared favorites list
Movies can be saved multiple times with no deduplication
No pagination or advanced filtering in search results
Limited error handling for failed API requests
Layout is not fully responsive on mobile devices
Future Improvements

Add user login and authentication using Supabase Auth
Enable deleting from the favorites list
Improve search functionality with filters and pagination
Make the layout fully mobile responsive
Add automated testing and continuous integration
File Structure

The source code is organized as follows:

/src/api: contains TMDb API functions
/src/components: reusable UI components like Navbar and MovieCard
/src/pages: React pages including Home, About, Explore, MovieDetail, and Favorites
supabaseClient.js: configures the Supabase database connection
