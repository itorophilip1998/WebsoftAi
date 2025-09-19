import React from "react";
type ButtonProps = {
  value: string; // Button text
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Click event handler
  className?: string; // Additional CSS classes
  disabled?: boolean; // Disabled state
};
export default function Button({
  value,
  onClick,
  className,
  disabled,
}: ButtonProps) {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {value}
    </button>
  );
}
