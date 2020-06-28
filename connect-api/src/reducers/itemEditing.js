import * as Types from '../constants/actionTypes';

let initinalState = {};

const itemEditing = (state = initinalState, action) => {
  switch (action.type) {
    case Types.EDIT_PRODUCT:
      return action.product;
    default:
      return state;
  }
};

export default itemEditing;
