import axios from "axios";

const BASE_URL = "https://api.punkapi.com/v2/";

export default async function fetchBeer(page) {
  const per_page = 25;
  const url = `${BASE_URL}beers?page=${page}&per_page=${per_page}`;
  const resp = await axios.get(url);
  return resp.data;
}
