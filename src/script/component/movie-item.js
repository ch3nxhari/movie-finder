class MovieItem extends HTMLElement {
  
  connectedCallback() {
    this.render();
  }
  
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
          color: #624F82;
        }
        .movie-poster-container {
          position: relative;
        }
        .movie-poster {
          width: 200px;
          height: calc(200px * (16/9));
          object-fit: cover;
          object-position: center;
        }
        .rating {
          position: absolute;
          top: 8px;
          left: 8px;
          background-color: #9F73AB;
          color: #624F82;
          padding: 4px 8px;
          border-radius: 4px;
        }
        .movie-info {
          padding: 12px;
        }
        .movie-info > h2 {
          font-family: 'Playfair Display', serif;
          font-weight: lighter;
          font-size: 10px;
          font-style: bold;
          text-transform: uppercase;
        }
        .movie-info > p {
          font-family: 'Open Sans', sans-serif;
          font-weight: normal;
          font-size: 14px;
          font-style: italic;
          margin-top: 10px;
          overflow: hidden;
          color: #85F4FF;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
        }
        .link {
          color: #A3C7D6;
          text-decoration: none;
        }
      </style>
      
      <div class="movie-poster-container">
      <a href="?id=${this._movie.id}" class="link">
      <img class="movie-poster" src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" alt="${this._movie.title} Poster">
      </a>
      <div class="rating">${this._movie.vote_average}</div>
      </div>
      <div class="movie-info">
      <a href="?id=${this._movie.id}" class="link">
      <h2>${this._movie.title}</h2>
      </a>
      <p>Released in ${this._movie.release_date.split('-')[0]}</p>
      </div>
    `;
  }
}  

customElements.define('movie-item', MovieItem);
