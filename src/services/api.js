import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5d8b64ad3c0aaf0014342c2a.mockapi.io/api/v1/collaborator',
});

export default api;
