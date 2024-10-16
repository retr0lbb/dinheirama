import type React from 'react'
import { IoMdClose } from 'react-icons/io'
import { tv, type VariantProps } from 'tailwind-variants'

const modalVariants = tv({
  slots: {
    wrapper:
      'absolute inset-0 w-full h-full bg-black/60 filter flex items-center justify-center z-50 ',
    base: 'flex flex-col items-center justify-center px-4 py-2 bg-snow-800 rounded-lg',
  },

  variants: {
    sizes: {
      almostFull: {
        wrapper: 'p-6',
        base: 'w-full h-full',
      },
      mid: {
        base: 'w-2/3 h-2/3',
      },
      minimum: {
        base: 'w-auto h-auto',
      },
    },
  },
})

interface ModalProps extends VariantProps<typeof modalVariants> {
  children?: React.ReactNode
  visible: boolean
}

const { base, wrapper } = modalVariants()

function Modal({ children, visible, sizes }: ModalProps) {
  return (
    <div className={`${wrapper({ sizes })} ${!visible && 'hidden'}`}>
      <div className={base({ sizes })}>{children}</div>
    </div>
  )
}

interface TitleProps {
  title: string
  desc?: string
  onCloseButtonClick: () => void
}

function Title({ desc, title, onCloseButtonClick }: TitleProps) {
  return (
    <div className="flex w-full items-baseline gap-3">
      <div className="flex flex-col flex-1">
        <h1 className="text-snow-400 text-lg font-bold">{title}</h1>
        {desc && <p className="text-snow-600 text-sm">{desc}</p>}
      </div>

      <button
        type="button"
        onClick={onCloseButtonClick}
        className="flex text-snow-400 text-2xl cursor-pointer hover:text-snow-600 transition-all p-1"
      >
        <IoMdClose />
      </button>
    </div>
  )
}

interface BodyProps {
  children: React.ReactNode
}

function Body({ children }: BodyProps) {
  return (
    <div className="flex w-full h-full flex-1 flex-col p-2">{children}</div>
  )
}

Modal.Title = Title
Modal.Body = Body

export { Modal }
