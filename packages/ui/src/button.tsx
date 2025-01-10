"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      //className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400 font-semibold rounded-lg text-sm px-5 py-2.5 transition duration-200 ease-in-out transform hover:scale-105 active:scale-95 shadow-md"
      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 flex items-center"
    >
      {children}
    </button>
  );
};
