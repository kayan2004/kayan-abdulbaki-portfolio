import React from "react";
type Props = {
  children: string;
  styles: string;
  onClick?: () => void;
};

const Button = ({ children, styles, onClick }: Props) => {
  return (
    <button
      className={`text-white gradient-button uppercase rounded-md ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
