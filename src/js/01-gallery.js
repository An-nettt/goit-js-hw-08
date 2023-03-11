// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galerryImages = document.querySelector('.gallery');
const galleryMarkUp = createGallery(galleryItems);
galerryImages.innerHTML = galleryMarkUp;

function createGallery(galleryItems) {
  const imagesMarkUp = galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
  return imagesMarkUp;
}

const gallery = new SimpleLightbox('.gallery a', {
  caption: true,
  captionDelay: 250,
});

gallery.elements.forEach(element => {
  element.firstElementChild.title = element.firstElementChild.alt;
});
