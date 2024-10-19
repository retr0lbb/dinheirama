import React, { type ComponentProps, forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const inputVariant = tv({
  base: 'text-snow-400 rounded-lg transition-all flex items-center justify-center',
  variants: {
    sizes: {
      sm: 'text-md py-1.5 px-3 gap-1',
      md: 'text-lg py-1.5 px-4 gap-2',
      lg: 'text-lg py-2 px-5 gap-3',
    },

    border: {
      greenColored: 'focus-within:border-apple_green',
      grayColored: 'focus-within:border-snow-600',
      none: 'focus-within:border',
      ghost: 'border-none',
    },
    variant: {
      undelined: 'border border-transparent border-b-snow-800 rounded-none',
      bordered: 'border border-snow-800',
    },

    types: {
      digit: 'max-w-12',
    },
  },
  defaultVariants: {
    border: 'greenColored',
    sizes: 'lg',
    variant: 'bordered',
  },
})

interface InputProps
  extends ComponentProps<'div'>,
    VariantProps<typeof inputVariant> {
  Title: string
}

const className = ''
function Input({ Title, sizes, border, variant, ...rest }: InputProps) {
  return (
    <div className="flex flex-col px-4">
      <label className="text-snow-600" htmlFor="name">
        {Title}
      </label>
      <div
        className={inputVariant({
          border,
          sizes,
          className: rest.className,
          variant,
        })}
      >
        {rest.children}
      </div>
    </div>
  )
}

interface InputFieldProps extends ComponentProps<'input'> {}

const Field = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, ...props }, ref) => {
    return (
      <input
        className="flex-1 bg-transparent outline-none w-full"
        id={id}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.Field = Field

export { Input }
