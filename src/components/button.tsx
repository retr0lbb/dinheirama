import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex gap-2 items-center w-full justify-center rounded-lg',
  variants: {
    variant: {
      primary:
        'bg-apple_green text-snow-200 shadow-md transition-all border border-snow-800 hover:bg-ofice_green',
      secondary:
        'bg-zinc-900 text-snow-400 border border-snow-600/40 shadow-md ',
      danger: 'bg-danger_red text-snow-200 border border-snow-600/20',
    },
    sizes: {
      sm: 'text-sm py-2 px-3',
      md: 'text-md py-2.5 px-3.5',
      lg: 'text-xl py-3 px-5',
    },
  },
  defaultVariants: {
    variant: 'primary',
    sizes: 'md',
  },
})

const classname = 'border-snow-600/40'
interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {}

export function Button({
  children,
  className,
  variant,
  sizes,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={button({
        variant: variant,
        sizes: sizes,
        className: className,
      })}
      {...rest}
    >
      {children}
    </button>
  )
}
