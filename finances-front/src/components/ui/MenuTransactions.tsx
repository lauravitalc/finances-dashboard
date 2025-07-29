import React from "react";
import Card from "./Card";
import { ArrowDownIcon, FunnelIcon, PlusIcon } from "@heroicons/react/24/outline";
import Dropdown from "./Dropdown";
import Button from "./Button";

const MenuTransactions: React.FC = () => {
    return (
        <Card variant='default' className='mt-6'>
            <div>
                <Dropdown
                    trigger={
                        <>
                            <FunnelIcon className="size-4" />Filter
                        </>
                    }
                    items={["Item 1", "Item 2"]}
                />

                <Dropdown
                    trigger={
                        <>
                            <ArrowDownIcon className="size-4" />Categories
                        </>
                    }
                    items={["Item 1", "Item 2"]}
                />

                <Button className="btn-active btn-primary" onClick={() => {
                    const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
                    modal?.showModal();
                }}>
                    <PlusIcon className="size-5 text-white" />New transaction
                </Button>
            </div>
        </Card>
    );
};

export default MenuTransactions;