import { DatePicker as AntdDatePicker } from "antd";
import moment from "moment";
import "./field.scss";

export default function DatePicker({
  label,
  required,
  errMsg,
  disabled,
  onChange,
  value,
  picker,
  format,
  dropdownClassName,
  placeholder
}) {
  return (
    <div className="datePickerContainer">
      {label && (
        <label>
          {label} {required && <span className="requiredSymbol">*</span>}
        </label>
      )}
      <AntdDatePicker
        picker={picker || ""}
        disabled={disabled}
        format={format}
        value={moment(value)[format]}
        dropdownClassName={dropdownClassName}
        onChange={(date, dateString) => onChange(dateString)}
        placeholder={placeholder}
      />
      <span className="errMsg">{errMsg}</span>
    </div>
  );
}
