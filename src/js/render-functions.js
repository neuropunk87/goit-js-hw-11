import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

let lightbox = null;

const loader = document.querySelector('.loader');
const galleryContainer = document.querySelector('.gallery');

export function createGallery(images) {
  const markup = images
    .map(
      img => `
    <li class="gallery-item">
      <a class="gallery-link" href="${img.largeImageURL}">
        <img class="gallery-image" src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
      </a>
      <div class="info">
        <div>
          <p class="info-title">Likes</p>
          <span class="info-stats">${img.likes}</span>
        </div>
        <div>
          <p class="info-title">Views</p>
          <span class="info-stats">${img.views}</span>
        </div>
        <div>
          <p class="info-title">Comments</p>
          <span class="info-stats">${img.comments}</span>
        </div>
        <div>
          <p class="info-title">Downloads</p>
          <span class="info-stats">${img.downloads}</span>
        </div>
      </div>
    </li>
  `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
