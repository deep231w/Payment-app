"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className:any;
}

export const Button = ({ onClick, children ,className}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400 font-semibold rounded-lg text-sm px-5 py-2.5 transition duration-200 ease-in-out transform hover:scale-105 active:scale-95 shadow-md"
    >
      {children}
    </button>
  );
};
