import React from "react";
import { ExclamationCircleFilled } from "@ant-design/icons";
import "./field.scss";

function TextArea({
  label,
  required,
  onChange,
  errMsg,
  customTextAreaStyles,
  onBlur,
  disabled,
  placeholder,
  autofocus,
  value = "",
}) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div
      className={`${customTextAreaStyles} ${
        errMsg && "fieldReqired"
      } textAreaContainer`}
    >
      {label && (
        <label>
          {label} {required && <span className="requiredSymbol">*</span>}
        </label>
      )}
      <textarea
        disabled={disabled}
        onChange={handleChange}
        value={value}
        onBlur={onBlur}
        placeholder={placeholder}
        autofocus={autofocus ? autofocus : false}
      />
      {errMsg && (
        <span className="errMsg">
          <ExclamationCircleFilled />
          {errMsg}
        </span>
      )}
    </div>
  );
}

export default TextArea;
