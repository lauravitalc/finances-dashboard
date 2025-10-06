import { React, useState } from "react";
import { Button, Label, Input } from "../ui";
import { createTransaction } from "../../services/transactionService";
import type { CreateTransactionRequest } from "../../services/types/transaction";

const [isLoading, setIsLoading] = useState(false);
const [message, setMessage] = useState("");

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // edit this 
    setIsLoading(true);
};

const TransactionModal: React.FC = () => {
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit}>
                        <h3 className="font-bold text-lg mb-4">New Transaction</h3>
                        <div>
                            <Label className="fieldset-label">Transaction Name</Label>
                            <Input className="input" type="text" placeholder="Lipstick" name="transactionName" />

                            <Label className="fieldset-label">Description</Label>
                            <Input className="input" type="text" placeholder="Red lipstick from MAC" name ="description" />

                            <Label className="fieldset-label">Amount</Label>
                            <Input className="input" type="number" placeholder="100.00" name="amount" />

                            <Label className="fieldset-label">Type</Label>
                            <Input className="input" type="number" placeholder="Makeup" name="type" />

                            <Label className="fieldset-label">Date</Label>
                            <Input type="date" className="input" name="date" />

                            <Label className="fieldset-label">Status</Label>
                            <select defaultValue="Pick a Category" className="select" name="status" >
                                <option disabled={true}>Status</option>
                                <option>Pending</option>
                                <option>Health</option>
                                <option>Bills</option>
                            </select>

                            <Label className="fieldset-label">Category</Label>
                            <select defaultValue="Pick a Category" className="select" name="category" >
                                <option disabled={true}>Categories</option>
                                <option>Transportation</option>
                                <option>Health</option>
                                <option>Bills</option>
                            </select>

                            <Label className="fieldset-label">Tags</Label>
                            <Input type="text" className="input" placeholder="Tags" name="tags" />
                        </div>
                    </form>

                    <div className="modal-action">
                        <form method="dialog">
                            <Button type="submit" className="btn-primary">Confirm</Button>
                            <Button>Close</Button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default TransactionModal;
