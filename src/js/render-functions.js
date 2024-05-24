import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let lightbox;

export function renderImages(images) {
  const gallery = document.querySelector(`.gallery`);
  gallery.innerHTML = images.map(image => createImageCard(image)).join(``);
  refreshLightbox();
}

function createImageCard({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
  return `
  <div class="photo-card">
      <a href="${largeImageURL}" class="gallery-link">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${likes}</p>
        <p class="info-item"><b>Views:</b> ${views}</p>
        <p class="info-item"><b>Comments:</b> ${comments}</p>
        <p class="info-item"><b>Downloads:</b> ${downloads}</p>
      </div>
  </div>
  `;
}

export function showNotification(message, type = `info`) {
  iziToast[type]({
    title: `Attention`,
    message: message,
    position: `topRight`
  });
}

export function clearGallery() {
  const gallery = document.querySelector(`.gallery`);
  gallery.innerHTML = ``;
}

export function initLightbox() {
  lightbox = new SimpleLightbox(`.gallery a`, {
    captionsData: `alt`,
    captionDelay: 250,
  });
}

function refreshLightbox() {
  if (lightbox) {
    lightbox.refresh();
  }
}

export function showLoader() {
  document.querySelector(`.loader`).classList.remove(`hidden`);
}

export function hideLoader() {
  document.querySelector(`.loader`).classList.add(`hidden`);
}