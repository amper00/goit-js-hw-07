import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const newArray = galleryItems.map(
  (element) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="${element.original}">
      <img
        class="gallery__image"
        src="${element.preview}" 
        alt="${element.description}"
        data-source="${element.original}"
        >
        </img>
        </a>
     </li>`
);
gallery.addEventListener("click", (event) => {
    event.preventDefault();
  
    const lightbox = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
    `);
  
    lightbox.show();
  });
  

gallery.insertAdjacentHTML("afterbegin", newArray.join(``));
console.log(galleryItems);

