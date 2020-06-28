import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';
import contactEditingReducer from './contactEditingReducer';

const appReducer = combineReducers({
  contacts: contactsReducer,
  contactEditing: contactEditingReducer,
});

export default appReducer;
