import { ComponentProps } from "react"
import { tv } from "tailwind-variants"

interface ButtonProps extends ComponentProps<"button"> {}


const button = tv({
    base: "bg-zinc-900 text-neutral-200 p-2.5 rounded-xl hover:bg-neutral-800 text-neutral-100 shadow transition-all scale-105"
})
const classname = ""
export function Button({children, className}: ButtonProps){
    return(
        <button className={button({className: className})}>
            {children}  
        </button>
    )
}