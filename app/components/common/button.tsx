import React from "react";
type Props = {
  children: React.ReactNode;
  styles?: string;
  onClick?: () => void;
};

const Button = ({ children, styles, onClick }: Props) => {
  return (
    <button
      className={`text-white gradient-button uppercase ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
