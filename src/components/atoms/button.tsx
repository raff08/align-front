import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  const baseStyles =
    "w-full py-2 px-4 rounded-lg font-medium transition-colors focus:outline-none";

  const variants = {
    primary:
      "bg-[#D2FD9C] text-black hover:brightness-95",
    secondary: "bg-gray-300 text-gray-900 hover:bg-gray-400",
    success: "bg-green-400 text-green-900 hover:bg-green-500",
  };

  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};