// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.




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
    if (e.target === e.currentTarget) return;
    // const parent = e.target.closest("img");
    // console.log(parent);
    
    const currentImage = e.target; 
// console.log(`"Current image:${currentImage.dataset.source}`);
    const instance = basicLightbox.create(
        `    
<div class="modal">
        <img src="${currentImage.dataset.source}"/>
        </div>`)

    instance.show()

    const modalWindow = document.querySelector(".modal")
    console.log(modalWindow);

    modalWindow.addEventListener("click", onClickClose);

    function onClickClose() {
        instance.close()
    }

   modalWindow.addEventListener("click", onClickClose);

    function onClickClose() {
        instance.close()
    }

  document.addEventListener("keyup", onEscClose);
  
  function onEscClose(e) {
    if (e.code === "Escape") {
      instance.close()
   }
  }
    
// console.log(e.target.nodeName);
// console.log(e.currentTarget);
};



