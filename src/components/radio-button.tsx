import React from "react";
import { tv, VariantProps } from "tailwind-variants"


const RadioButtonVariants = tv({
  base: "text-snow-200 relative rounded-full border border-snow-800 focus-within:border-apple_green focus-within:text-apple_green transition-all",
  variants: {
    sizes: {
      sm: "px-3 py-1 text-xs",
      md: "px-3 py-2 text-sm",
      lg: "px-5 py-2.5"
    }
  },

  defaultVariants: {
    sizes: "lg"
  }
})


interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof RadioButtonVariants> {
  Label: string;
  id: string;
}

export function RadioButton({ Label, id, sizes, className, name, ...rest }: RadioInputProps) {
  return (
    <div
      className={RadioButtonVariants({className, sizes})}
    >
      <input
        id={id}
        className="z-10 cursor-pointer absolute inset-0 opacity-0 peer"
        name={name}
        type="radio"
        {...rest}
      />
      <label
        className="peer-checked:text-apple_green"
        htmlFor={id}
      >
        {Label}
      </label>
    </div>
  );
}
