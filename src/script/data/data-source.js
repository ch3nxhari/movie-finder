import movies from './movies.js';

class DataSource {
  static searchMovie(keyword) {
    const API_KEY = '8a42fec51700176cf226af95c008d6f0';
    const query = encodeURI(keyword);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }  
  static getPopularMovies() {
    const API_KEY = '8a42fec51700176cf226af95c008d6f0';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject('Failed to get popular movies');
        }
      });
  }
}

export default DataSource;

