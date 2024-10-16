import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { IoAlert } from 'react-icons/io5'
import { MdBlock } from 'react-icons/md'
import { FaChevronDown } from 'react-icons/fa6'
import Image from 'next/image'
import { Button } from './button'

export interface miniCardProps {
  ImageSRC?: StaticImport
  ImageAlt?: string
  name: string
  nickname: string
  level: string
  onClick?: () => void
}

function miniCard({
  ImageAlt = 'Image',
  ImageSRC,
  level,
  name,
  nickname,
  onClick,
}: miniCardProps) {
  function handlePropsToModal() {
    if (!onClick) {
      return
    }
    onClick()
  }

  if (!ImageSRC) {
    return null
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
        alt={ImageAlt}
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

interface FriendsPageRequestPerGroup {
  ImageSRC?: StaticImport
  bgImage?: StaticImport
  ImageAlt?: string
  name: string
  nickname: string
  level: string
}

function FriendPage({
  ImageSRC,
  bgImage,
  ImageAlt = 'your profile picture',
  name,
  nickname,
  level,
}: FriendsPageRequestPerGroup) {
  if (!ImageSRC) {
    return null
  }
  return (
    <section className="w-full h-full flex flex-col gap-8 p-2 bg-red-500">
      <div className="flex w-full items-center justify-around relative">
        {bgImage && (
          <Image
            src={bgImage}
            alt="your wallpaper"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="flex w-full items-center justify-center gap-4 z-10 bg-snow-900/60 p-2 relative">
          <Image alt={ImageAlt} className="rounded-xl size-36" src={ImageSRC} />
          <div className="flex flex-col text-snow-400 w-full">
            <h1 className="text-7xl font-bold leading-none">{nickname}</h1>
            <p className="text-sm text-snow-600">{name}</p>
            <p className="text-md text-snow-600">
              lvl{' '}
              <span className="text-ofice_green font-bold text-md">
                {level}
              </span>
            </p>
          </div>

          <div className="absolute top-2 right-2 flex items-center justify-center gap-4">
            <Button variant="secondary">
              Seguindo <FaChevronDown />
            </Button>

            <Button variant="secondary">
              Bloquear <MdBlock />
            </Button>

            <Button variant="secondary">
              <IoAlert />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default {
  miniCard,
  FriendPage,
}
