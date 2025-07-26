import React from "react";

type CardVariant = 'default' | 'menu' | 'minimal' | 'elevated';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  variant?: CardVariant;
}

const Card: React.FC<CardProps> = ({ className = '', children, variant = 'default' }) => {
  const getVariantClasses = (variant: CardVariant): string => {
    switch (variant) {
      case 'default':
        return 'card bg-base-100 shadow-sm p-6';
      case 'menu':
        return 'card';
      case 'minimal':
        return 'card bg-base-100 p-4';
      case 'elevated':
        return 'card bg-base-100 shadow-lg p-6';
      default:
        return 'card bg-base-100 shadow-sm p-6';
    }
  };

  return (
    <div className={`${getVariantClasses(variant)} ${className}`}>
        {children}
    </div>
  );
};

export default Card;