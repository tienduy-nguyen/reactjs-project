import * as Types from './../constants/actionTypes';

const initialState = [];

let findIndex = (products, id) => {
  let result = -1;
  products.forEach((product, index) => {
    if (product.id === id) {
      return (result = index);
    }
  });
  return result;
};

const productsReducer = (state = initialState, action) => {
  let index = -1;
  const { id } = action;
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    case Types.DELETE_PRODUCT:
      index = findIndex(state, id);
      state.splice(index, 1);
      return [...state];
    case Types.ADD_PRODUCT:
      state.push(action.product);
      return [...state];
    case Types.UPDATE_PRODUCT:
      index = findIndex(state, action.product.id);
      state[index] = action.product;
      return [...state];
    default:
      return [...state];
  }
};

export default productsReducer;
