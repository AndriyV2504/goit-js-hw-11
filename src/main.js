import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showNotification, clearGallery, initLightbox, showLoader, hideLoader } from './js/render-functions.js';

document.addEventListener(`DOMContentLoaded`, () => {
    const form = document.querySelector(`.search-form`);
    form.addEventListener(`submit`, onSearch);

    initLightbox();
});

async function onSearch(event) {
    event.preventDefault();

    const query = event.target.elements.searchQuery.value.trim();
    if (!query) {
        showNotification(`Please enter a search query!`, `warning`);
        return;
    }

    clearGallery();
    showLoader();

    try {
        const images = await fetchImages(query);
        hideLoader();

        if (images.length === 0) {
            showNotification(`Sorry, there are no images matching your search query. Please try again!`, `warning`);
            return;
        }

        renderImages(images);
    } catch (error) {
        hideLoader();
        showNotification(`An error occurred while fetching images. Please try again!`, `error`);
    }
}