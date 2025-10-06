export interface Transaction {
  id?: string;
  transactionName: string;
  description?: string;
  amount: number;
  date: string;
  type: string;
  status: string;
  category: string;
  tags: string;
}

export interface CreateTransactionRequest {
  transactionName: string;
  description?: string;
  amount: number;
  date: string;
  type: string;
  status: string;
  category: string;
  tags: string;
}

export interface CreateTransactionResponse {
  success: boolean;
  data?: Transaction;
  message?: string;
}