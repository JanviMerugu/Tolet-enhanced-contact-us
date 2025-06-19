// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://toletuscontactus.onrender.com/api',
});

export default API;
