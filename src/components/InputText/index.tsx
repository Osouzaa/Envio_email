import React from "react";
import { LabelContainer, InputText as StyledInputText, Select } from "./styles";

interface InputTextProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: string[]; // Se presente, transforma o input em um select
  type?: 'text' | 'date'
}

export function InputText({ label, value, onChange, options, type = "text" }: InputTextProps) {
  return (
    <LabelContainer>
      {label}
      {options ? (
        <Select value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      ) : (
        <StyledInputText type={type} value={value} onChange={onChange} />
      )}
    </LabelContainer>
  );
}
