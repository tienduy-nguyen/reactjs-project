import { TransactionType } from '../@types/transactions';
import * as types from './App.constants';

interface AppState {
  transactions: TransactionType[];
}

export const AppReducer = (state: AppState, action: ActionRedux) => {
  switch (action.type) {
    case types.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (x) => x.id !== action.payload.id
        ),
      };
    case types.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
