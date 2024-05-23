import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function renderImages(images) {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";

  const markup = images.map(image => {
    return `
    <a href="${image.largeImageURL}" class="gallery-item"
        style="background-image: url("${image.webformatURL}");">
      <div class="info">
        <p><b>Likes</b>: ${image.likes}</p>
        <p><b>Views</b>: ${image.views}</p>
        <p><b>Comments</b>: ${image.comments}</p>
        <p><b>Downloads</b>: ${image.downloads}</p>
      </div>
    </a>
    `;
  }).join(``);

  gallery.insertAdjacentHTML("beforeend", markup);

  const lightbox = new SimpleLightbox(".gallery a");
  lightbox.refresh();
}

export function showLoader() {
  document.querySelector(".loader").style.display = "inline-block";
}

export function hideLoader() {
  document.querySelector(".loader").style.display = "none";
}

export function showError(message) {
  iziToast.error({
    title: "Error",
    message: message,
  });
}