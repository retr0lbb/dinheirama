'use client'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import type { Dispatch, SetStateAction } from 'react'

export interface miniCardProps {
  ImageSRC: StaticImport
  ImageAlt: string
  name: string
  nickname: string
  level: string
  setModalInfo?: Dispatch<SetStateAction<miniCardProps | undefined>>
}
function miniCard({
  ImageAlt,
  ImageSRC,
  level,
  name,
  nickname,
  setModalInfo,
}: miniCardProps) {
  function handlePropsToModal() {
    if (!setModalInfo) {
      return
    }
    setModalInfo
  }
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      onClick={handlePropsToModal}
      className="flex items-center w-full gap-4 py-1 px-4 cursor-pointer transition-all hover:bg-snow-800"
    >
      <Image
        className="lg:size-10 2xl:size-16 rounded-lg"
        src={ImageSRC}
        alt="friend 1 profile picture"
      />
      <div className="flex flex-col w-full">
        <p className="text-snow-400 text-lg 2xl:text-xl font-bold max-w-56 overflow-hidden whitespace-nowrap text-ellipsis">
          {nickname}
        </p>
        <p className="text-xs 2xl:text-sm text-snow-600">{name}</p>
      </div>

      <div className="flex items-center flex-shrink-0 justify-center size-8 2xl:size-12 text-snow-400 text-md 2xl:text-xl rounded-full border overflow-hidden">
        {level}
      </div>
    </div>
  )
}

export default {
  miniCard,
}
