import axios from 'axios';

// json-server server.json -p 3030 
const api = axios.create({
  baseURL: 'http://localhost:3030',
});

export default api; 