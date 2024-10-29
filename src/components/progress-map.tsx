import type React from 'react'
import { FaCheck } from 'react-icons/fa6'
import { tv, type VariantProps } from 'tailwind-variants'

interface ProgressMapProps {
  children: React.ReactNode
}
function ProgressMap({ children }: ProgressMapProps) {
  return (
    <div className="w-full flex items-center justify-center bg-gradient-radial">
      {children}
    </div>
  )
}

const ProgressNodeVariants = tv({
  slots: {
    node: 'size-14 border-4 text-xl flex items-center justify-center rounded-full',
    text: 'absolute flex items-center justify-center w-full -bottom-6 whitespace-nowrap text-lg',
    bar: 'w-full h-1',
  },

  variants: {
    completion: {
      completed: {
        node: 'border-ofice_green text-ofice_green',
        text: 'text-ofice_green font-semibold',
        bar: 'bg-ofice_green',
      },
      upToCome: {
        node: 'border-snow-800 text-snow-800',
        bar: 'bg-snow-800',
        text: 'text-snow-800',
      },
      actual: {
        node: 'border-ofice_green text-snow-600',
        text: 'text-ofice_green font-semibold',
        bar: 'bg-ofice_green',
      },
    },
  },

  defaultVariants: {
    completion: 'upToCome',
  },
})

const { bar, node, text } = ProgressNodeVariants()
interface ProgressNodeProps extends VariantProps<typeof ProgressNodeVariants> {
  nodeName: string
  passNumber?: number
  onClick?: () => void
}
function ProgressNode({
  onClick,
  nodeName,
  passNumber,
  completion,
}: ProgressNodeProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center justify-center relative py-2 cursor-pointer"
    >
      <div className={node({ completion })}>
        {completion === 'completed' ? (
          <FaCheck className="text-xl text-ofice_green" />
        ) : (
          passNumber
        )}
      </div>

      <h1 className={text({ completion })}>{nodeName}</h1>
    </button>
  )
}

function ProgressLinkBar({
  completion,
}: VariantProps<typeof ProgressNodeVariants>) {
  return <div className={bar({ completion })} />
}

ProgressMap.ProgressNode = ProgressNode
ProgressMap.ProgressLinkBar = ProgressLinkBar

export { ProgressMap }
