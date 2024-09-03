import React from "react";

interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Label: string;
  id: string; // Adiciona id como uma propriedade obrigatória
}

export function RadioButton({ Label, id, className, name, ...rest }: RadioInputProps) {
  return (
    <div
      className={`px-5 py-2.5 text-snow-200 relative rounded-full border
      border-snow-800 focus-within:border-apple_green focus-within:text-apple_green transition-all ${className}`}
    >
      <input
        id={id} // Adiciona id ao input
        className="z-10 cursor-pointer absolute inset-0 opacity-0 peer"
        name={name}
        type="radio" // Adiciona type radio ao input
        {...rest}
      />
      <label
        className="peer-checked:text-apple_green"
        htmlFor={id} // Usa id no htmlFor
      >
        {Label}
      </label>
    </div>
  );
}
