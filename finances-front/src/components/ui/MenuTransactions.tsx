import React from "react";
import Card from "./Card";
import { ArrowDownIcon, FunnelIcon, PlusIcon } from "@heroicons/react/24/outline";

const MenuTransactions: React.FC = () => {
    return (
        <Card variant='default' className='mt-6'>
            <div>
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn m-1"><FunnelIcon className="size-4" />Filter</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>

                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn m-1"><ArrowDownIcon className="size-4" />Categories</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>

                <button className="btn btn-active btn-primary">
                    <PlusIcon className="size-5 text-white" />New transaction
                </button>
            </div>
        </Card>
    );
};

export default MenuTransactions;