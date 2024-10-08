'use client'
import type React from 'react'
import { IoMdClose } from 'react-icons/io'

interface ModalProps {
  children?: React.ReactNode
  visible: boolean
}

function Modal({ children, visible }: ModalProps) {
  return (
    <div
      className={`absolute inset-0 w-full h-full bg-black/60 filter flex items-center justify-center ${!visible && 'hidden'}`}
    >
      <div className="flex flex-col items-center justify-center px-4 py-2 bg-snow-800 rounded-lg">
        {children}
      </div>
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
    <div className="flex items-baseline gap-3">
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
  return <div className="flex flex-col p-2">{children}</div>
}

Modal.Title = Title
Modal.Body = Body

export { Modal }
