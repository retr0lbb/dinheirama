import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<"button"> {}

export function Button({children}: ButtonProps){
    return(
        <button className="bg-neutral-700 text-neutral-200 p-2.5 rounded-xl">
            {children}  
        </button>
    )
}