import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const gallery = document.querySelector(".gallery")
// console.log(gallery);

const markup = galleryItems.reduce((acc, item) =>
acc + `<div class="gallery__item"><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></div>`, "")

// console.log(markup);
gallery.insertAdjacentHTML("beforeend", markup)

    const lightbox = new SimpleLightbox('.gallery a', {
      captionSelector: "img",
      captionsData: "alt",
      captionDelay: 250,
      // captionPositon: "bottom"
      // caption: true,
    });
    
