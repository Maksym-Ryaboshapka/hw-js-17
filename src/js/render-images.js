import { Images } from "./services/get-images-api";

class Page {
  static renderImages() {
    const list = document.querySelector(".list");
    const loadBtn = document.querySelector("#load-images");

    function createItems() {
      Images.getImages()
        .then((res) => {
          if (res.hits.length < Images.perPage) loadBtn.remove();

          res.hits.forEach((imageObj) => {
            const item = document.createElement("li");

            const img = document.createElement("img");
            img.src = imageObj.largeImageURL;

            list.append(item);
            item.append(img);
          });
        })
        .catch((err) => console.log(err));
    }

    createItems();

    loadBtn.addEventListener("click", () => {
      Images.page += 1;

      createItems();
    });
  }
}

Page.renderImages();
