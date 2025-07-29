import React from "react";

interface ButtonProps {
    className: string,
    children: React.ReactNode,
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
    return (
        <button className={`btn ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;
