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
    // if (e.target === e.currentTarget) return;
    // const parent = e.target.closest("img");
    // console.log(parent);
    
    // const currentImage = e.target; 
// console.log(`"Current image:${currentImage.dataset.source}`);
//     const instance = basicLightbox.create(
//         `    
// <div class="modal">
//         <img src="${currentImage.dataset.source}"/>
//         </div>`)

//     instance.show()
    const options = {
    onShow: () => { window.addEventListener('keydown', onEscClose); },
    onClose: () => { window.removeEventListener('keydown', onEscClose); },
  };

  
const instance = basicLightbox.create( `<div class="modal"><img src="${currentImage.dataset.source}"/></div>`,options)

  
    // const modalWindow = document.querySelector(".modal")
    // console.log(modalWindow);

    // modalWindow.addEventListener("click", onClickClose);

    // function onClickClose() {
    //     instance.close()
    // }

  //  modalWindow.addEventListener("click", onClickClose);

    // function onClickClose() {
    //     instance.close()
    // }
//  document.addEventListener("keydown", onEscClose); --- так працює
  // modalWindow.addEventListener("keydown", onEscClose);
  
  function onEscClose(e) {
    if (e.code === "Escape") {
        instance.close()
   
   }
  }
    
// console.log(e.target.nodeName);
// console.log(e.currentTarget);
};



