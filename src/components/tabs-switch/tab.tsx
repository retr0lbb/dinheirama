import type React from 'react'

interface TabProps {
  tabName: string
  children: React.ReactNode
}

export function Tab({ tabName, children }: TabProps) {
  return <section className="w-full h-full flex flex-col">{children}</section>
}
