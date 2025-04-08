// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api'; // Можеш да го вземеш от .env ако искаш

// export const getAllPosts = async () => {
//     const response = await axios.get(`${API_URL}/posts`, { withCredentials: true });
//     return response.data;
// };

// export const createPost = async ({ title, text, themeId }) => {
//     const response = await axios.post(`${API_URL}/posts`, {
//         title,
//         text,
//         themeId,
//     }, { withCredentials: true });

//     return response.data;
// };

// export const addComment = async (postId, commentText) => {
//     const response = await axios.post(`${API_URL}/posts/${postId}/comments`, {
//         text: commentText
//     }, { withCredentials: true });

//     return response.data;
// };

// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/posts';

// // Създаване на пост
// export const createPost = (postData) =>
//   axios.post(API_URL, postData).then((res) => res.data);

// // Взимане на всички постове
// export const getPosts = () =>
//   axios.get(API_URL).then((res) => res.data);

// // Добавяне на коментар
// export const addComment = (postId, commentData) =>
//     fetch(`${baseUrl}/posts/${postId}/comments`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${getToken()}`
//       },
//       body: JSON.stringify(commentData)
//     }).then(res => res.json());
  

// // Лайкване на пост
// // export const likePost = (postId) =>
// //   axios.post(`${API_URL}/${postId}/like`).then((res) => res.data);

// // src/api/postApi.js

// export const likePost = (postId) => {
//     const token = localStorage.getItem('authToken');
//     return axios.put(
//       `http://localhost:5000/api/post-likes/${postId}/like`,
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     ).then(res => res.data);
//   };
  

import apiClient from './apiClient';

export const getPosts = () => apiClient.get('/posts').then(res => res.data);

export const createPost = (postData) => apiClient.post('/posts', postData).then(res => res.data);

export const addComment = (postId, commentData) =>
  apiClient.post(`/posts/${postId}/comments`, commentData).then(res => res.data);

export const likePost = (postId) =>
    apiClient.post(`/posts/${postId}/like`).then(res => res.data);
  
