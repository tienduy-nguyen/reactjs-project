import * as Types from '../constants/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case Types.DISABLE_BALANCE_ON_ADD:
      return {
        ...state,
        disableBalanceOnAdd: action.payload,
      };
    case Types.DISABLE_BALANCE_ON_EDIT:
      return {
        ...state,
        disableBalanceOnEdit: action.payload,
      };
    case Types.ALLOW_REGISTRATION:
      return {
        ...state,
        allowRegistration: action.payload,
      };
    default:
      return state;
  }
}
