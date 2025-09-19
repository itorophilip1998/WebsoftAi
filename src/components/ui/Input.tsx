import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import React from "react";

type InputProps = {
  placeholder?: string; // Placeholder text
  type?: string; // Input type (e.g., text, password, email)
  className?: string; // Additional CSS classes
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change event handler
  value?: string; // Input value
  name?: string; // Input name
  disabled?: boolean; // Disabled state
  required?: boolean; // Required field
  autoFocus?: boolean; // Autofocus attribute
  label: string; // Label text
};

export default function Input({
  placeholder,
  type,
  className,
  onChange,
  value,
  name,
  disabled,
  autoFocus,
  label,
}: InputProps) {
  return (
    <FloatLabel>
      <InputText
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        className={className}
        name={name}
        autoFocus={autoFocus}
        {...Input}
        disabled={disabled}
      />
      <label htmlFor={name}>{label}</label>
    </FloatLabel>
  );
}
