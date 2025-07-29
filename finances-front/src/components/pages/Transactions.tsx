import React from 'react';
import { Card, Actions, MenuTransactions } from '../ui';
import { TransactionModal } from '../modal';

const Transactions: React.FC = () => {
    return (
        <div className="p-6">
            <h1 className='text-2xl font-bold'>Transactions</h1>
            <p className='text-sm text-gray-500'>Manage your transactions here.</p>
            <MenuTransactions />
            <Card variant='default' className='bg-base-100 mt-6'>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Categories</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Uber</td>
                                <td>Uber to Airport</td>
                                <td>Transportation</td>
                                <td>2021-01-01</td>
                                <td>$100.00</td>
                                <td>
                                    <Actions></Actions>
                                </td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Outback</td>
                                <td>Outback Steakhouse</td>
                                <td>Food</td>
                                <td>2021-01-02</td>
                                <td>$50.00</td>
                                <td>
                                    <Actions></Actions>
                                </td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Amazon</td>
                                <td>Books and Supplies</td>
                                <td>Shopping</td>
                                <td>2021-01-03</td>
                                <td>$75.00</td>
                                <td>
                                    <Actions></Actions>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
            <TransactionModal />
        </div>
    );
};

export default Transactions;