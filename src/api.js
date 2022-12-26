import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '31503481-01b895d3fefb9a8f7de362945';

export const fetchPictureByHits = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data.hits;
};
