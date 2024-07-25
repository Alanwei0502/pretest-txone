import React, { forwardRef } from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  labelClassname?: string;
  containerClassname?: string;
  isError?: boolean;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    label,
    labelClassname = '',
    containerClassname = '',
    className = '',
    isError,
    disabled,
    ...inputProps
  } = props;

  const errorCls = isError ? 'border-red-500' : '';
  const disabledCls = disabled ? 'border-gray-200 cursor-not-allowed' : '';
  const normalCls = !isError && !disabled ? 'border-primary' : '';

  return (
    <div className={`flex items-center gap-3 w-fit ${containerClassname}`}>
      <label htmlFor={inputProps.id} className={labelClassname}>
        {label}
      </label>
      <input
        type='text'
        ref={ref}
        className={`border rounded-s rounded-e p-2 text-sm focus:outline-none ${normalCls} ${errorCls} ${disabledCls} ${className}`}
        disabled={disabled}
        {...inputProps}
      />
    </div>
  );
});

TextField.displayName = 'TextField';

export default TextField;
