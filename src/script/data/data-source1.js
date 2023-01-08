import axios from 'axios';


class DataSource {
  static searchMovie(keyword) {
    const API_KEY = '8a42fec51700176cf226af95c008d6f0';
    const query = encodeURI(keyword);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

    return axios.get(url)
      .then(response => {
        if (response.data.results) {
          return Promise.resolve(response.data.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }  
  static getPopularMovies() {
    const API_KEY = '8a42fec51700176cf226af95c008d6f0';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    return axios.get(url)
      .then(response => {
        if (response.data.results) {
          return Promise.resolve(response.data.results);
        } else {
          return Promise.reject('Failed to get popular movies');
        }
      });
  }
}

export default DataSource;


