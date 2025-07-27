import React from "react";

interface ActionsProps {
    className?: string;
}

const Actions: React.FC<ActionsProps> = ({ className }) => {
    return (
        <div className={`flex space-x-2 ${className}`}>
            <button className="btn btn-sm">Edit</button>
            <button className="btn btn-sm btn-error">Delete</button>
        </div>
    );
};

export default Actions;
