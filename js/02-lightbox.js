import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('ul.gallery');

function createGallery(array) {
  const galleryPics = array
    .map(({ preview, original, description }) => {
      return `<li>
      <a class="gallery__item" href="${original}">
      <img class="gallery__image"
      src="${preview}" 
      alt="${description}" 
      title="${description}" /></a>
      </li>`})
    .join('');
  return galleryContainer.insertAdjacentHTML('afterbegin', galleryPics);
};

createGallery(galleryItems);
const gallery = new SimpleLightbox('ul.gallery a', {
  captionsData: 'alt',
  captionDelay: 250});
