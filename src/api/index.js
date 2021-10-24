import axios from 'axios';

export default axios.create({
  baseURL: 'https://restcountries.com/v2',
  timeout: 5000,
});
