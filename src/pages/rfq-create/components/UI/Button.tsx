import React from 'react';
import { Button as _Button } from 'react-bootstrap';

interface ButtonProps {
  variant?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  onClick,
  disabled,
  type,
  className,
  children,
}: ButtonProps) => {
  return (
    <_Button
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={className}
    >
      {children}
    </_Button>
  );
};

export default Button;
