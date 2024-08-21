import React, { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const inputVariant = tv({
    base: "text-snow-400 border border-snow-800 rounded-lg transition-all flex items-center justify-center",
    variants: {
        sizes: {
            sm: "text-md py-1.5 px-3 gap-1",
            md: "text-lg py-1.5 px-4 gap-2",
            lg: "text-lg py-2 px-5 gap-3"
        },

        border: {
            greenColored: "focus-within:border-apple_green",
            grayColored: "focus-within:border-snow-600",
            ghost: "border-none"
        }

    },
    defaultVariants: {
        border: "greenColored",
        sizes: "lg"
    }
})


interface InputProps extends ComponentProps<"div">, VariantProps<typeof inputVariant> {
    Title: string
}

interface InputFieldProps extends ComponentProps<"input"> {}


function Input({Title, sizes, border ,...rest}: InputProps){
    return(
        <div className="flex flex-col px-4">
            <label className="text-snow-600" htmlFor="name">{Title}</label>
            <div className={inputVariant({ border, sizes, className: rest.className})}>
                {rest.children}
            </div>
        </div>
    )
}

function Field({className, ...rest}: InputFieldProps){
    return(
        <input 
          className="flex-1 bg-transparent outline-none w-full" 
          {...rest} 
        />
    )
}

Input.Field = Field

export {
    Input
}