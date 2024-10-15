import { extend } from 'dayjs'
import type React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const ExpenseCardVariants = tv({
  base: 'w-full rounded-xl p-5 text-snow-400 border border-snow-600/20',

  variants: {
    variants: {
      solid: 'bg-snow-800',
      hollow: 'bg-transparent',
    },
  },

  defaultVariants: {
    variants: 'solid',
  },
})

export interface ExpenseCardProps
  extends VariantProps<typeof ExpenseCardVariants> {
  children: React.ReactNode
}
export function ExpenseCard({ children, variants }: ExpenseCardProps) {
  return (
    <div className="flex w-full items-center relative">
      <div className={ExpenseCardVariants({ variants: variants })}>
        <div className="flex items-center gap-2">{children}</div>
      </div>
    </div>
  )
}
