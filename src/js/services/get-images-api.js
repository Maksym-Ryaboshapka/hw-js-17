export class Images {
  static page = 1;
  static perPage = 9;
  static #API_KEY = "48237262-7099298d94a1d2e5526ceb7b1";

  static getImages() {
    const API = `https://pixabay.com/api?key=${
      this.#API_KEY
    }&q=forest&image_type=photo&callback=callbackFunction&page=${this.page}&per_page=${this.perPage}`;

    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = API;

      window.callbackFunction = (data) => {
        resolve(data.hits);
        document.body.removeChild(script);
      };

      document.body.appendChild(script);
    });
  }
}