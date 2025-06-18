import axios from 'axios';

const API_KEY = '45141549-5d04e9bb650dc04154699f876';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return axios.get(BASE_URL, { params }).then(response => response.data);
}
