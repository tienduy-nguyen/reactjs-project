import * as Types from '../constants/actionTypes';
import callApi from '../utils/apiCaller';

export const actFetchContactsRequest = () => {
  return (dispatch) => {
    return callApi('users', 'GET', null).then((res) => {
      dispatch(actFetchContacts(res.data));
    });
  };
};
export const actFetchContacts = (contacts) => {
  return {
    type: Types.FETCH_CONTACTS,
    contacts,
  };
};

export const actDeleteContactRequest = (id) => {
  return (dispatch) => {
    return callApi(`users/${id}`, 'DELETE', null).then((res) => {
      dispatch(actDeleteContact(id));
    });
  };
};

export const actDeleteContact = (id) => {
  return {
    type: Types.DELETE_CONTACT,
    id,
  };
};

export const actGetContactRequest = (id) => {
  return (dispatch) => {
    return callApi(`users/${id}`, 'GET', null).then((res) => {
      dispatch(actGetContact(res.data));
    });
  };
};
export const actGetContact = (contact) => {
  return {
    type: Types.GET_CONTACT,
    contact,
  };
};

export const actAddContactRequest = (contact) => {
  return (dispatch) => {
    return callApi('users', 'POST', contact).then((res) => {
      dispatch(actAddContact(res.data));
    });
  };
};
export const actAddContact = (contact) => {
  return {
    type: Types.ADD_CONTACT,
    contact,
  };
};

export const actUpdateContactRequest = (contact) => {
  return (dispatch) => {
    return callApi(`users/${contact.id}`, 'PUT', contact).then((res) => {
      dispatch(actUpdateContact(res.data));
    });
  };
};
export const actUpdateContact = (contact) => {
  return {
    type: Types.UPDATE_CONTACT,
    contact,
  };
};
