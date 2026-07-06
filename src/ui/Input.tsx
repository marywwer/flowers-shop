type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  helperText?: string;
  disabled?: boolean;
};

export function Input({
  label,
  value,
  onChange,
  placeholder,
  helperText,
  disabled,
}: InputProps) {
  return (
    <label className={`field ${disabled ? "is-disabled" : ""}`}>
      <span className="field__label">{label}</span>
      <input
        className="field__input"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
      />
      {helperText && <small className="field__helper">{helperText}</small>}
    </label>
  );
}
