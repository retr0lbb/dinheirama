import type React from 'react'
import { TabsButton, TabsButtonWrapper } from './tabs-buttons'
import { Tab } from './tab'

interface rootProps {
  children: React.ReactNode
}

function root({ children }: rootProps) {
  return <div className="w-full h-full">{children}</div>
}

export default {
  root,
  buttons: {
    root: TabsButtonWrapper,
    button: TabsButton,
  },
  tab: Tab,
}
