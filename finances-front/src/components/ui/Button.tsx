import React from "react";

interface ButtonProps {
    className: string,
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
    return (
        <button className={`btn ${className}`}>
            {children}
        </button>
    )
}

export default Button;
