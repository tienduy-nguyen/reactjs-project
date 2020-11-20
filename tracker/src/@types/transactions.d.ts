//eslint-disable-next-line
import { NumberLiteralType } from 'typescript';

interface TransactionType {
  id: string;
  text: string;
  amount: number;
}

interface ResGetTransactionApi extends Res {
  data: {
    transactions: TransactionType[];
  };
}
interface ResGetTransaction extends ActionRedux {
  payload: ResGetTransactionApi;
}
interface ResGetTransactionItemApi extends Res {
  data: {
    transaction: TransactionType;
  };
}
interface ResGetTransactionItem extends ActionRedux {
  payload: ResGetTransactionItemApi;
}

interface AppState {
  transactions: TransactionType[];
}
