import React from "react";
import "./field.scss";

function Button({ title, customStyles, onClick, disabled }) {
  return (
    <button className={`${customStyles && customStyles} buttonContainer`} onClick={onClick} disabled={disabled ? true : false}>
      {title}
    </button>
  );
}

export default Button;
