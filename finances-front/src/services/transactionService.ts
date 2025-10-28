import axios, { type AxiosResponse } from 'axios';
import type { Transaction, CreateTransactionRequest, CreateTransactionResponse } from './types/transaction';

const API_URL = 'http://localhost:5198/api/transactions';

export const createTransaction = async (transactionData: CreateTransactionRequest): Promise<CreateTransactionResponse> => {
  try {
    const response: AxiosResponse<Transaction> = await axios.post(API_URL, transactionData);
    return {
      success: true,
      data: response.data,
      message: "Transaction created successfully"
    };
  } catch (error) {
    console.error('Error creating transaction:', error);
    return {
      success: false,
      message: "Failed to create transaction"
    };
  }
};

export const getTransactions = async (): Promise<Transaction[]> => {
    try {
        const response: AxiosResponse<Transaction[]> = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        return [];
    }
};
