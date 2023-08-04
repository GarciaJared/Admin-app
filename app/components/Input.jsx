import React, {forwardRef} from "react";

const Input = forwardRef(({ name, label, className, type, placeholder }, ref)  => {

  return (
    <div>
      <label htmlFor="email-address" className="sr-only">
        {label}
      </label>
      <input
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
});
Input.displayName = "Input";

export default Input;
//rafce
//appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
