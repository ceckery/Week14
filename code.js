// Define movie data
const movies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    image: 'shawshank.jpg',
    synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    rating: 4.7,
    reviews: [],
  },
  {
    id: 2,
    title: 'The Godfather',
    image: 'godfather.jpg',
    synopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    rating: 4.5,
    reviews: [],
  },
  {
    id: 3,
    title: 'The Dark Knight',
    image: 'darkknight.jpg',
    synopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    rating: 4.6,
    reviews: [],
  },
];

// Get DOM elements
const movieListElement = document.getElementById('movie-list');
const movieTemplate = document.getElementById('movie-template');
const reviewTemplate = document.getElementById('review-template');

// Render movies
movies.forEach(movie => {
  const movieElement = movieTemplate.content.cloneNode(true);
  const movieImageElement = movieElement.querySelector('.movie-image');
  const movieTitleElement = movieElement.querySelector('.movie-title');
  const movieSynopsisElement = movieElement.querySelector('.movie-synopsis');
  const movieRatingCountElement = movieElement.querySelector('.movie-rating-count');
  const reviewListElement = movieElement.querySelector('.review-list');
  const reviewFormElement = movieElement
