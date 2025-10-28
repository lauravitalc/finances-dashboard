import React, { useState } from "react";
import { Button, Label, Input } from "../ui";
import { createTransaction } from "../../services/transactionService";
import type { CreateTransactionRequest } from "../../services/types/transaction";

const TransactionModal: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setMessage("");

        try {
            const form = event.currentTarget;
            const data = new FormData(form);

            const transactionData: CreateTransactionRequest = {
                transactionName: (data.get("transactionName") || "").toString().trim(),
                description: (data.get("description") || "").toString().trim(),
                amount: Number(data.get("amount")),
                date: (data.get("date") || "").toString().trim(),
                type: (data.get("type") || "").toString().trim(),
                status: (data.get("status") || "").toString().trim(),
                category: (data.get("category") || "").toString().trim(),
                tags: (data.get("tags") || "")
                        .toString()
                        .split(",")
                        .map(t => t.trim())
                        .filter(Boolean),
            };

            await createTransaction(transactionData);
            setMessage("Transaction created successfully");

            form.reset();
            (document.getElementById("transactionModal") as HTMLDialogElement | null)?.close();
        } catch (error) {
            const msg = error instanceof Error ? error.message : "Error creating transaction";
            setMessage(msg);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <dialog id="transactionModal" className="modal">
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

                        {message && <p className="mt-2 text-sm">{message}</p>}

                        <div className="modal-action">
                            <Button 
                                type="submit"
                                className="btn-primary"
                                disabled={isLoading}
                            >
                                Confirm
                            </Button>
                            <Button 
                                type="button" 
                                onClick={() => (document.getElementById("transactionModal") as HTMLDialogElement | null)?.close()}
                            >
                                Close
                            </Button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default TransactionModal;
