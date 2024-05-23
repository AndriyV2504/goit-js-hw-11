const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = `43967395-ba8c6739f73e8322e41736fdd`;

function fetchImages(query) {
  const params = new URLSearchParams({
    key: `API_KEY`,
    q: query,
    image_type: photo,
    orientation: horizontal,
    safesearch: true,
  });
  const response = fetch("${BASE_URL}?${params}");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = response.json();
  return data;
}