// components/Button.tsx

import React, { MouseEventHandler } from "react";
import style from "../styles/button.module.css";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  edit: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, edit }) => {
  const buttonClass = edit ? style.editButton : style.morebtn;

  return (
    <button onClick={onClick} className={`${style.button} ${buttonClass}`}>
      {children}
    </button>
  );
};

export default Button;
