import React from "react";

interface ButtonProps {
    className?: string,
    type?: "button" | "submit" | "reset",
    children: React.ReactNode,
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ className, type, children, onClick }) => {
    return (
        <button className={`btn ${className}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Button;
