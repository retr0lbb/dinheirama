import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

export interface miniCardProps {
  ImageSRC?: StaticImport
  ImageAlt?: string
  name: string
  nickname: string
  level: string
  onClick?: () => void
}

function miniCard({
  ImageAlt = 'Image', // Valor padrão para evitar undefined
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
    return null // Retorne null se não houver imagem para evitar retorno indefinido
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
  ImageSRC?: StaticImport // Deixe como opcional
  bgImage?: StaticImport
  ImageAlt?: string
  name: string // Certifique-se de que `name` seja obrigatório
  nickname: string // Certifique-se de que `nickname` seja obrigatório
  level: string // Certifique-se de que `level` seja obrigatório
}

function FriendPage({
  ImageSRC,
  bgImage,
  ImageAlt = 'your profile picture', // Valor padrão para evitar undefined
  name,
  nickname,
  level,
}: FriendsPageRequestPerGroup) {
  if (!ImageSRC) {
    return null
  }
  return (
    <section className="w-full h-full flex flex-col gap-8 p-5">
      <div className="flex w-full items-center justify-around relative">
        {bgImage && (
          <Image
            src={bgImage}
            alt="your wallpaper"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="flex w-full items-center justify-center gap-4 z-10 bg-snow-900/60 p-2">
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
        </div>
      </div>
    </section>
  )
}

export default {
  miniCard,
  FriendPage,
}
