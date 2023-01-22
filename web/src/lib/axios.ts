import axios from 'axios';

export const api = axios.create({
  //baseURL: '179.84.23.31:3333',
  baseURL: 'http://localhost:3333',
});