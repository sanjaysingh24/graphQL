import axios from 'axios';

export const apiurl = axios.create({
  baseURL: 'http://localhost:3000/graphql',
});

// Add a request interceptor to attach the token
// apiurl.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token'); // or wherever you store it
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
