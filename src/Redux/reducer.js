

import {
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_REQ,
    GET_PRODUCTS_SUCCESS,
  } from "./actionTypes";
  
  const initState = {
    products: [],
    isLoading: false,
    isError: false,
  };
  
  export const reducer = (state = initState, { type, payload }) => {
    // add the switch statement for different actions
    switch (type) {
      case GET_PRODUCTS_REQ:
        return { ...state, isLoading: true };
  
      case GET_PRODUCTS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: [...payload],
          isError: false,
        };
      case GET_PRODUCTS_FAILURE:
        return {
          ...StorageEvent,
          isLoading: false,
          data: [],
          isError: true,
        };
      default:
        return state;
    }
  };