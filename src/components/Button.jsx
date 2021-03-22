import React from 'react';

const Button = ({ children }) => (
  <button
    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none active:bg-blue-500"
    type="button"
  >
    {children}
  </button>
);

export default Button;
