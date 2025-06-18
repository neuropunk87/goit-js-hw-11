import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const main = document.querySelector('main');
let loader = document.querySelector('.loader');

if (!loader) {
  loader = document.createElement('span');
  loader.className = 'loader hidden';
  main.insertBefore(loader, main.querySelector('.gallery'));
}

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');

hideLoader();

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(function (data) {
      if (!data.hits.length) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(function () {
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(function () {
      hideLoader();
      form.reset();
    });
});
