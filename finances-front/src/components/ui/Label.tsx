import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    className?: string;
}

const Label: React.FC<LabelProps> = ({ className, ...props }) => {
    return (
        <label className={`fieldset-label ${className || ''}`} {...props} />
    );
};

export default Label;
