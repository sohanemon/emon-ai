import axios from 'axios';
export const imageAPI = axios.create({
  baseURL: '/api/openai/generate-image',
  timeout: 25000,
});
