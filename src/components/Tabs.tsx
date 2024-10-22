import { tv } from 'tailwind-variants'

// Tabs Root
interface TabsProps {
  children: React.ReactNode
}
function Tabs({ children }: TabsProps) {
  return (
    <section className="w-full h-full flex flex-col gap-4">{children}</section>
  )
}

// Tabs Buttons
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

export interface TabsButtonProps extends React.ComponentProps<'input'> {
  tabName: string
  tabId: string
  isSelected?: boolean
}

const { base, text } = tabsButtonVariants()
function TabButton({
  tabId,
  tabName,
  isSelected = false,
  ...rest
}: TabsButtonProps) {
  return (
    <div className={base({ isSelected })}>
      <input
        className="absolute inset-0 w-full h-full z-10 opacity-0 cursor-pointer"
        id={tabId}
        type="radio"
        name="tab"
        checked={isSelected}
        {...rest}
      />
      <label className={text({ isSelected })} htmlFor={tabId}>
        {tabName}
      </label>
    </div>
  )
}

export interface TabsButtonWrapperProps {
  children: React.ReactNode
}

function TabsButtonWrapper({ children }: TabsButtonWrapperProps) {
  return (
    <div className="flex items-center p-1.5 border border-snow-600/40 bg-snow-800/40 gap-1 rounded-md">
      {children}
    </div>
  )
}

// tabTab
interface TabProps {
  tabName: string
  children: React.ReactNode
}

function Tab({ tabName, children }: TabProps) {
  return (
    <section className="w-full h-full flex flex-1 overflow-y-auto flex-col">
      {children}
    </section>
  )
}

Tabs.Button = TabButton
Tabs.Buttons = TabsButtonWrapper
Tabs.Tab = Tab

export { Tabs }
