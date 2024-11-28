import axios from 'axios';
import { URL } from './constants'

export const getProducts = async () => {
  const response = await axios.get(`${URL}/products`);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(`${URL}/products`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  await axios.delete(`${URL}/products/${id}`);
};

export const updateProduct = async (id, product) => {
   const response = await axios.put(`${URL}/products/${id}`, product);
   return response.data;
 };
 


