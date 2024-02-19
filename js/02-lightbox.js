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
        
        >
        </img>
        </a>
     </li>`
);g


gallery.innerHTML = newArray.join("");


const lightbox = new SimpleLightbox('.gallery a', {


    captionDelay: 250, 
    captionsData: 'alt'
});