import React from "react";

interface DropdownItem {
    trigger: React.ReactNode,
    items: string[]
}

const Dropdown: React.FC<DropdownItem> = ({ trigger, items }) => {
    return (
        <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1">{trigger}</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                {items.map((item, index) => (
                    <li key={index}>
                        <a>{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Dropdown;
