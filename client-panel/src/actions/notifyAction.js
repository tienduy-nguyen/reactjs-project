import * as Types from '../constants/actionTypes';

export const notifyUser = (message, messageType) => {
  return {
    type: Types.NOTIFY_USER,
    message,
    messageType,
  };
};
