import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface miniCardProps {
  ImageSRC: StaticImport
  ImageAlt: string
  name: string
  nickname: string
  level: string
}
function miniCard(props: miniCardProps) {
  return (
    <div className="flex items-center w-full gap-4 py-1 px-4 cursor-pointer transition-all hover:bg-snow-800">
      <Image
        className="lg:size-10 2xl:size-16 rounded-lg"
        src={props.ImageSRC}
        alt="friend 1 profile picture"
      />
      <div className="flex flex-col w-full">
        <p className="text-snow-400 text-lg 2xl:text-xl font-bold max-w-56 overflow-hidden whitespace-nowrap text-ellipsis">
          {props.nickname}
        </p>
        <p className="text-xs 2xl:text-sm text-snow-600">{props.name}</p>
      </div>

      <div className="flex items-center flex-shrink-0 justify-center size-8 2xl:size-12 text-snow-400 text-md 2xl:text-xl rounded-full border overflow-hidden">
        {props.level}
      </div>
    </div>
  )
}

export default {
  miniCard,
}
