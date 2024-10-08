import { extend } from 'dayjs'
import type React from 'react'
import { tv } from 'tailwind-variants'

export interface TabsButtonWrapperProps {
  children: React.ReactNode
}

export function TabsButtonWrapper({ children }: TabsButtonWrapperProps) {
  return (
    <div className="flex items-center p-2 border border-snow-600/40 bg-snow-800/40 gap-1 rounded-md">
      {children}
    </div>
  )
}

const tabsButtonVariants = tv({
  slots: {
    base: 'py-4 px-6 rounded-lg relative flex items-center justify-center cursor-pointer border border-snow-600/40 bg-black/50 hover:bg-black/10',
    text: 'text-snow-400 text-lg',
  },

  variants: {
    isSelected: {
      true: {
        base: 'border border-black bg-apple_green hover:bg-apple_green',
        text: 'text-snow-200',
      },
    },
  },
})

const { base, text } = tabsButtonVariants()

export interface TabsButtonProps extends React.ComponentProps<'input'> {
  tabName: string
  tabId: string
  isSelected?: boolean
}
export function TabsButton({
  tabName,
  tabId,
  isSelected,
  ...rest
}: TabsButtonProps) {
  return (
    <div className={base({ isSelected })}>
      <input
        className="absolute inset-0 w-full h-full z-10 opacity-0 cursor-pointer"
        id={tabId}
        type="radio"
        name="tab"
        {...rest}
      />
      <label className={text({ isSelected })} htmlFor={tabId}>
        {tabName}
      </label>
    </div>
  )
}
