import React from "react";

interface ButtonProps {
    className?: string,
    type?: "button" | "submit" | "reset",
    children: React.ReactNode,
    onClick?: () => void,
    disabled?: boolean,
    isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({ className, type, children, onClick, disabled, isLoading }) => {
    return (
        <button 
        className={`btn ${className}`} 
        onClick={onClick} 
        type={type}
        disabled={disabled || isLoading}
        >
            {isLoading ? "Loading..." : children}
        </button>
    )
}

export default Button;