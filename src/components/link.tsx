import React from "react"
import { tv, VariantProps } from "tailwind-variants"

const linkVariant = tv({
    base: "text-apple_green cursor-pointer underline hover:underline-offset-2 transition-all",
    variants: {
        sizes: {
            sm: "text-sm",
            md: "text-md",
            lg: "text-lg",
            xl: "text-xl"
        },
    },
    defaultVariants: {
        sizes: "md"
    }
})


interface LinkProps extends React.ComponentProps<"a">, VariantProps<typeof linkVariant>{}

export async function Link({href, sizes, className, children}: LinkProps) {
    return (
        <a className={linkVariant({sizes, className})} href={href}>
            {children}
        </a>
    )
}