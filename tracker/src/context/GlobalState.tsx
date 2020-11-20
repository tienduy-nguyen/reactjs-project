import React, { useReducer } from 'react';
import { TransactionType } from '../@types/transactions';
import { AppReducer } from '../App/App.reducer';
import * as Types from '../App/App.constants';

const initialState = {
  transactions: [] as TransactionType[],
  deleteTransaction: (id: string) => null,
  addTransaction: (transaction: TransactionType) => null,
};

export const GlobalContext = React.createContext(initialState);

// Provider component
export const GlobalProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Actions
  const deleteTransaction = (id: string) => {
     dispatch({
      type: Types.DELETE_TRANSACTION,
      payload: id,
    });
    return null;
  };

  const addTransaction = (transaction: TransactionType) => {
     dispatch({
      type: Types.ADD_TRANSACTION,
      payload: transaction,
    });
    return null;
  };

  
  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
};
