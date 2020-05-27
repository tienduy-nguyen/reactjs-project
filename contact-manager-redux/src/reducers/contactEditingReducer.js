import * as Types from '../constants/actionTypes';

const initialState = {
  name: '',
  email: '',
  phone: '',
};

const contactEditingReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case Types.GET_CONTACT:
      state = actions.contact;
      return state;
    default:
      return state;
  }
};

export default contactEditingReducer;
