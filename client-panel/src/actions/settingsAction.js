import * as Types from '../constants/actionTypes';

export const setDisableBalanceOnAdd = () => {
  const settings = JSON.parse(localStorage.getItem('settings'));

  //Toggle
  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;

  //Set back to localStorage
  localStorage.setItem('settings', JSON.stringify(settings));
  return {
    type: Types.DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd,
  };
};
export const setDisableBalanceOnEdit = () => {
  const settings = JSON.parse(localStorage.getItem('settings'));

  //Toggle
  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;

  //Set back to localStorage
  localStorage.setItem('settings', JSON.stringify(settings));
  return {
    type: Types.DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit,
  };
};
export const setAllowRegistrartion = () => {
  const settings = JSON.parse(localStorage.getItem('settings'));

  //Toggle
  settings.allowRegistration = !settings.allowRegistration;

  //Set back to localStorage
  localStorage.setItem('settings', JSON.stringify(settings));
  return {
    type: Types.ALLOW_REGISTRATION,
    payload: settings.allowRegistration,
  };
};
