import React from "react";
import { tv, VariantProps } from "tailwind-variants"


const spinnervariant = tv({
    base: "border-transparent border-4 border-t-4 border-t-ofice_green rounded-full animate-spin",
    variants: {
        sizes: {
            sm: "size-5",
            md: "size-7",
            lg: "size-10",
            xxgl: "size-56 border-8 border-t-8"
        },
        colour: {
            green: "border-t-ofice_green",
            lime: "border-t-apple_green",
            gray: "border-t-snow-600"
        }
    },


    defaultVariants: {
        colour: "green",
        sizes: "md"
    }
})

interface SpinnerProps extends Omit<React.ComponentProps<"div">, "children">, VariantProps<typeof spinnervariant>{}

export function Spinner({className, sizes, colour}:SpinnerProps){
    return(
        <div
          className={spinnervariant({className: className, sizes, colour})}
        />
    )
}