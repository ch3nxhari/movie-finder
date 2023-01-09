import '../component/movie-list.js';
import '../component/movie-detail.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const movieListElement = document.querySelector('movie-list');
  const movieDetailElement = document.querySelector('movie-detail');
  
  const onButtonSearchClicked = async () => {
      try {
      const result = await DataSource.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const getMovieIdFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  };

  const onLoad = async () => {
    
    const movieId = getMovieIdFromUrl();
    
    movieListElement.classList.add('hidden');
    movieDetailElement.classList.remove('hidden');

    if (movieId) {
      
      try {
        const movie = await DataSource.getMovie(movieId);
        movieDetailElement.movie = movie;
      } catch (message) {
        movieDetailElement.renderError(message);
      }
    } else {
      movieListElement.classList.remove('hidden');
      try {
        const popularMovies = await DataSource.getPopularMovies();
        movieListElement.movies = popularMovies;
      } catch (message) {
        movieListElement.renderError(message);
      }
    }
  };

  const renderResult = results => {
    movieListElement.movies = results;
    movieListElement.classList.remove('hidden');
    movieDetailElement.classList.add('hidden');
  };

  const fallbackResult = message => {
    movieListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
  window.addEventListener('load', onLoad);
};

export default main;
