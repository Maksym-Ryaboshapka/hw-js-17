class e{static page=1;static perPage=9;static #e="48237262-7099298d94a1d2e5526ceb7b1";static getImages(){let e=`https://pixabay.com/api?key=${this.#e}&q=forest&image_type=photo&callback=callbackFunction&page=${this.page}&per_page=${this.perPage}`;return new Promise(t=>{let a=document.createElement("script");a.src=e,window.callbackFunction=e=>{t(e.hits),document.body.removeChild(a)},document.body.appendChild(a)})}}(class{static renderImages(){let t=document.querySelector(".list"),a=document.querySelector("#load-images");function c(){e.getImages().then(c=>{c.length<e.perPage&&a.remove(),c.forEach(e=>{let a=document.createElement("li"),c=document.createElement("img");c.src=e.largeImageURL,t.append(a),a.append(c)})}).catch(e=>console.log(e))}c(),a.addEventListener("click",()=>{e.page+=1,c()})}}).renderImages();
//# sourceMappingURL=index.6c2c1a2f.js.map
