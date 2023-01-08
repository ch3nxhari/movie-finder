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
        }
        .movie-poster-container {
          position: relative;
        }
        .movie-poster {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        .rating {
          position: absolute;
          top: 8px;
          right: 8px;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
        }
        .movie-info {
          padding: 24px;
        }
        .movie-info > h2 {
          font-weight: lighter;
        }
        .movie-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5; /* number of lines to show */
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
      <h2>${this._movie.title}</h2>
      <p>
      <span class="overview-text">${this._movie.overview}</span>
      <a class="read-more" href="#">Read more</a>
      </p>
      <p>Released in ${this._movie.release_date.split('-')[0]}</p>
      </div>
    `;
    const overviewText = this.shadowRoot.querySelector('.overview-text');
    const readMoreLink = this.shadowRoot.querySelector('.read-more');

    readMoreLink.addEventListener('click', event => {
      event.preventDefault();
      overviewText.style.display = 'block';
      readMoreLink.style.display = 'none';
    });
  }
}  

customElements.define('movie-item', MovieItem);
