import axios from 'axios';

export default async function FetchBeer(page) {
  const BASE_URL = 'https://api.punkapi.com/v2/';
  const per_page = 25;
  const fetch = `${BASE_URL}beers?page=${page}&per_page=${per_page}`;
  const resp = await axios.get(fetch).then(response => response.data);
  return resp;
}
