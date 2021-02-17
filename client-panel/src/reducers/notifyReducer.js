import * as Types from '../constants/actionTypes';

const initialState = {
  message: null,
  messageType: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case Types.NOTIFY_USER:
      return {
        ...state,
        message: action.message,
        messageType: action.messageType,
      };
    default:
      return state;
  }
}
