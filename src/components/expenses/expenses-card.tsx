import type React from 'react'

export interface ExpenseCardProps {
  children: React.ReactNode
}
export function ExpenseCard({ children }: ExpenseCardProps) {
  return (
    <div className="flex w-full items-center relative gap-2">
      <div className="bg-snow-800 w-full rounded-xl p-5 text-snow-400 border border-snow-600/20">
        <div className="flex items-center gap-2">{children}</div>
      </div>
    </div>
  )
}
