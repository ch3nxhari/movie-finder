class MovieDetail extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    
    set movie(movie) {
      this._movie = movie;
      this.render();
    }
    
    render() {
      this.shadowDOM.innerHTML = `
      <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host {
        display: block;
        margin-bottom: 18px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
        background-color: #3F3B6C;
      }
      .movie-poster-container {
        position: relative;
      }
      .movie-poster {
        width: 150;
        height: calc(150px * (16/9));;
        object-fit: cover;
        object-position: center;
      }
      .rating {
        position: absolute;
        top: 8px;
        left: 8px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
      }
      .movie-info {
        padding: 8px;
      }
      .movie-info > h2 {
        font-family: 'Playfair Display', serif;
        font-weight: lighter;
        font-size: 18px;
        font-style: bold;
        text-transform: uppercase;
      }
      .movie-info > p {
        font-family: 'Open Sans', sans-serif;
        font-weight: normal;
        font-size: 12px;
        font-style: italic;
        margin-top: 10px;
        overflow: hidden;
        text-align: justify;color:#85F4FF;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 25;
      }
      .overview-text {
        max-height: 80px;
        overflow: auto;
      }
      </style>
        
        <div class="movie-poster-container">
          <img class="movie-poster" src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" alt="${this._movie.title} Poster">
          <div class="rating">${this._movie.vote_average}</div>
        </div>
        <div class="movie-info">
          <h2>${this._movie.title} (${this._movie.release_date.split('-')[0]})</h2>
          <p>${this._movie.overview}</p>
          <p>Duration ${this._movie.runtime} minute</p>
        </div>
      `;
    }
    
    renderError(message) {
      this.shadowDOM.innerHTML = `
      <style>
      .placeholder {
        font-weight: lighter;
        color: rgba(0, 0, 0, 0.5);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    </style>
        
        <p>${message}</p>
      `;
    }
  }
  
  customElements.define('movie-detail', MovieDetail);
  