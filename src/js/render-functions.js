import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let lightbox;

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images.map(image => {
    return `
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" title="${image.tags}"/>
      </a>
    `;
  }).join('');
  
  gallery.innerHTML = markup;

  if (lightbox) {
    lightbox = new SimpleLightbox('.gallery a' {
      captionsData: `alt`,
      captionDelay: 250,
      });
  } else {
    lightbox.refresh();
  }
}

export function showNotification(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('hidden');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
}