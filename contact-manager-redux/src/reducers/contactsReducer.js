import * as Types from '../constants/actionTypes';

const initialState = [];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_CONTACTS:
      state = action.contacts;
      return [...state];
    case Types.DELETE_CONTACT:
      const id = action.id;
      return state.filter((contact) => contact.id !== id);
    case Types.ADD_CONTACT:
      const newContact = action.contact;
      state.unshift(newContact);
      return [...state];
    case Types.UPDATE_CONTACT:
      const contact = action.contact;
      state = state.map((x) => {
        return x.id === contact.id ? (x = contact) : x;
      });
      return [...state];
    default:
      return state;
  }
};

export default contactReducer;
