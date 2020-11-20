import React, {useContext} from 'react';
import { TransactionType } from 'src/@types/transactions';
import { GlobalContext } from '../context/GlobalState';


interface TransactionProps {
  transaction: TransactionType;
}


export const Transaction = (props: TransactionProps) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const transaction = props.transaction;

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}