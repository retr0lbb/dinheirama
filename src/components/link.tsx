import React from "react"
import { tv, VariantProps } from "tailwind-variants"
import Link, {LinkProps} from "next/link"

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


interface CustomLinkProps extends LinkProps, VariantProps<typeof linkVariant> {
    children: React.ReactNode,
    className?: string 
}

export async function LinkComponent({href, sizes, className, children}: CustomLinkProps) {
    return (
        <Link className={linkVariant({sizes, className})} href={href}>
            {children}
        </Link>
    )
}