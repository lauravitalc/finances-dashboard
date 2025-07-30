import React from "react";
import { Button, Label, Input } from "../ui";

const TransactionModal: React.FC = () => {
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form>
                        <h3 className="font-bold text-lg mb-4">New Transaction</h3>
                        <div>
                            <Label className="fieldset-label">Transaction Name</Label>
                            <Input className="input" type="text" placeholder="Type here" />

                            <Label className="fieldset-label">Description</Label>
                            <Input className="input" type="text" placeholder="Type here" />

                            <Label className="fieldset-label">Amount</Label>
                            <Input className="input" type="number" placeholder="Type here" />

                            <Label className="fieldset-label">Date</Label>
                            <Input type="date" className="input" placeholder="Type here" />

                            <Label className="fieldset-label">Category</Label>
                            <select defaultValue="Pick a color" className="select">
                                <option disabled={true}>Pick a color</option>
                                <option>Crimson</option>
                                <option>Amber</option>
                                <option>Velvet</option>
                            </select>
                        </div>
                    </form>

                    <div className="modal-action">
                        <form method="dialog">
                            <Button className="btn-primary">Confirm</Button>
                            <Button>Close</Button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default TransactionModal;
