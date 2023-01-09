class AppBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
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
          width: 100%;
          background-color: #9F73AB;
          color: #41025f;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        h2 {
          padding: 16px;
          text-align: center;
          font-family: 'Playfair Display', serif;
          font-weight: bolder;
          font-size: 18px;
          font-style: bold;
          text-transform: uppercase;
        }
      </style>
      
      <h2 class="title">Sedang Mencari Film</h2>
    `;
    const title = this.shadowDOM.querySelector('.title');
    title.addEventListener('click', () => {
      window.location.href = '/';
    });
  }
}

customElements.define('app-bar', AppBar);
