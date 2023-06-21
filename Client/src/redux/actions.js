import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";
import axios from "axios";

export const addFav = (character) => {
   console.log('add fav');
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
         const response = await axios.post(endpoint, character);
         const data = response.data;
         
         dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch (error) {
         console.error(error);
         // Manejar el error de acuerdo a tus necesidades
      }
   };
};

export const removeFav = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return async (dispatch) => {
      try {
         const response = await axios.delete(endpoint);
         const data = response.data;

         dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      } catch (error) {
         console.error(error);
         // Manejar el error de acuerdo a tus necesidades
      }
   };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
