import * as Types from './../constants/actionTypes';

const initialState = [];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    default:
      return [...state];
  }
};

export default productsReducer;
