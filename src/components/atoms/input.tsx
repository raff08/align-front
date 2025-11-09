import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  className, 
  ...props   
}) => {
  const baseStyles =
    "w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D2FD9C]";

  return (
    <input
      type={type}
      className={`${baseStyles} ${className || ""}`}
      {...props}
    />
  );
};