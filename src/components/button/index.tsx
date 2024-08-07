import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, disabled, ...restButtonProps } = props;
  const disabledCls = disabled
    ? 'opacity-40 cursor-not-allowed'
    : 'hover:bg-secondary';
  return (
    <button
      className={`text-white bg-primary border-none px-8 py-2 rounded-s rounded-e ${disabledCls} ${className}`}
      disabled={disabled}
      {...restButtonProps}
    >
      {children}
    </button>
  );
};

export default Button;
