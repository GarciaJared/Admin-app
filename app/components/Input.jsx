import React from "react";
const Input = ({ name, label, className, type, placeholder, ref, onChange })  => {

  return (
    <div>
      <label htmlFor="email-address" className="sr-only">
        {label}
      </label>
      <input
        onChange={onChange}
        id={name}
        name={name}
        type={type}
        autoComplete="email"
        required
        className={className}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
};
Input.displayName = "Input";

export default Input;
//rafce