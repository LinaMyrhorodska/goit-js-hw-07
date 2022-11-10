import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('div');
galleryContainer.addEventListener('click', onClickModal);

const galleryPics = galleryItems.map(galleryEls).join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryPics);

function galleryEls({ preview, original, description }) {
  return `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
          <img class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"/></a> 
        </div>`};

function onClickModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG')
    return;

  const closer = basicLightbox.create(
    `<div class="modal">
    <img src="${event.target.dataset.source}"/>
  </div>`,
  
    {onShow: closer => {
        window.addEventListener('keydown', onEscBtn);
        closer.element().querySelector('img').onclick = closer.close;
      },
      onClose: closer => {
        window.removeEventListener('keydown', onEscBtn);
      },
    });

  function onEscBtn(event) {
    if (event.code === 'Escape') {
      closer.close();
    }
  }

  closer.show();
};
