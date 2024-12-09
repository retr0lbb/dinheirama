import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex gap-2 items-center w-full justify-center rounded-lg',
  variants: {
    disable: {
      true: 'opacity-50 !hover:bg-inherit cursor-default',
      false: 'cursor-pointer',
    },
    variant: {
      primary:
        'bg-apple_green text-snow-200 shadow-md transition-all border border-snow-800 hover:bg-ofice_green',
      secondary:
        'bg-zinc-900 text-snow-400 border border-snow-600/40 shadow-md hover:bg-zinc-800',
      danger:
        'bg-danger_red text-snow-200 border border-snow-600/20 hover:bg-red-800',
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
    disable: false,
  },

  compoundVariants: [
    {
      disable: true,
      variant: 'primary',

      className: 'hover:bg-apple_green',
    },
    {
      disable: true,
      variant: 'secondary',

      className: 'hover:bg-zinc-900',
    },
    {
      disable: true,
      variant: 'danger',

      className: 'hover:bg-danger_red',
    },
  ],
})

const className = 'bg-inherit'

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {}

export function Button({
  children,
  className,
  variant,
  sizes,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={button({
        variant: variant,
        sizes: sizes,
        className: className,
        disable: disabled,
      })}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
