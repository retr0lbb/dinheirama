import React from "react"
import { tv } from "tailwind-variants"

const linkVariant = tv({
    base: "undeline"
})


interface LinkProps extends React.ComponentProps<"a"> {}

export async function Link({href, children}: LinkProps) {
    return (
        <a className="underline" href={href}>
            {children}
        </a>
    )
}