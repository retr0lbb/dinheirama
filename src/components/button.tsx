import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"



const button = tv({
    base: "flex flex-col items-center w-full justify-center rounded-lg border border-zinc-950/10",
    variants: {
        variant: {
            primary: "bg-apple_green text-snow hover:bg-ofice_green transition-all",
            secondary: "bg-zinc-900 text-zinc-200"
        },
        sizes: {
            sm: "text-sm py-1 px-1.5",
            md: "text-lg py-2 px-3.5",
            lg: "text-xl py-3 px-5"
        }
    },
    defaultVariants: {
        variant: "primary",
        sizes: "md"
    }
})


const classname = "transition-all"
interface ButtonProps extends ComponentProps<"button">, VariantProps<typeof button> {}

export function Button({children, className, variant, sizes, ...rest}: ButtonProps){
    return(
        <button className={button({variant: variant, sizes: sizes, className: className})} {...rest}>
            {children}  
        </button>
    )
}