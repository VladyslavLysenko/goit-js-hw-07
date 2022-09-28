import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallerryBox = document.querySelector(".gallery");
// console.log(gallerryBox);

const render = galleryItems.map(item=> `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join("")
gallerryBox.insertAdjacentHTML("beforeend", render)

gallerryBox.addEventListener("click", onClick);

function onClick(e) { 
  e.preventDefault()
  const targetImg = e.target.nodeName === 'IMG';
  if (!targetImg) { return; }

    const options = {
      onShow: () => {
      window.addEventListener('keydown', onEscClose);
      instance.element().querySelector('img').onclick = instance.close},
    
      onClose: () => {
        window.removeEventListener('keydown', onEscClose);
      },
  };

  
const instance = basicLightbox.create( `<div class="modal"><img src="${e.target.dataset.source}"/></div>`,options)

// console.log(e.target);

  
  function onEscClose(e) {
    if (e.code === "Escape") {
        instance.close()
   
   }
  }
  
    instance.show()
    
};



