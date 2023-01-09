import axios from 'axios';

class DataSource {
  
  static searchMovie(keyword) {
    
    const query = encodeURI(keyword);
    const url = `${process.env.MOV_BASEURL}/search/movie?api_key=${process.env.MOV_APIKEY}&query=${query}&page=1`;

    return axios.get(url)
      .then(response => response.data.results)
      .catch(error => {
        throw new Error(`${keyword} is not found`);
      });
  }  
  
  static getPopularMovies() {
    
    const url = `${process.env.MOV_BASEURL}/movie/popular?api_key=${process.env.MOV_APIKEY}&page=1`;

    return axios.get(url)
      .then(response => response.data.results)
      .catch(error => {
        throw new Error('Failed to get popular movies');
      });
  }
  
  static getMovie(id) {
    
    const url = `${process.env.MOV_BASEURL}/movie/${id}?api_key=${process.env.MOV_APIKEY}`;
  
    return axios.get(url)
      .then(response => response.data)
      .then(data => {
        if (data) {
          return Promise.resolve(data);
        } else {
          return Promise.reject(`Movie with id ${id} not found`);
        }
      });
  }
}

export default DataSource;

