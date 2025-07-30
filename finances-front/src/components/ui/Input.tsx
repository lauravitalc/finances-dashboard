import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    validatorHint?: string | React.ReactNode;
    validatorClassName?: string;
}

const Input: React.FC<InputProps> = ({ className, validatorHint, validatorClassName, ...props }) => {
    return (
        <div className="input-wrapper">
            <input
                className={`input ${className || ''}`}
                {...props}
            />
            {validatorHint && (
                <p className={`validator-hint ${validatorClassName || ''}`}>
                    {validatorHint}
                </p>
            )}
        </div>
    );
};

export default Input;
