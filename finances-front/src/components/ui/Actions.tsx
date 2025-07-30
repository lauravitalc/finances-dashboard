import React from "react";
import Button from "./Button";

interface ActionsProps {
    className?: string;
}

const Actions: React.FC<ActionsProps> = ({ className }) => {
    return (
        <div className={`flex space-x-2 ${className}`}>
            <Button className="btn-sm">Edit</Button>
            <Button className="btn-sm btn-error">Delete</Button>
        </div>
    );
};

export default Actions;
