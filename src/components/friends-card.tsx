import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { IoAlert } from 'react-icons/io5'
import { MdBlock } from 'react-icons/md'
import { FaBoltLightning, FaChevronDown } from 'react-icons/fa6'
import Image from 'next/image'
import { Button } from './button'
import { ExpenseCard } from './expenses/expenses-card'
import { HiArrowTrendingUp } from 'react-icons/hi2'
import { moneyFormatter } from '@/utils/money-string-formatter'
import { GiArcheryTarget } from 'react-icons/gi'
import Throphy from '@/static/minthrophy.webp'
import GAUCHO from '@/static/gaucho.jpg'
import CLEITON from '@/static/clietip.webp'
import RT from '@/static/rt.jpg'
import SMA from '@/static/sma.webp'

export interface miniCardProps {
  ImageSRC?: StaticImport
  ImageAlt?: string
  name: string
  nickname: string
  level: string
  onClick?: () => void
}

function MiniCard({
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
        className="size-10 lg:size-10 2xl:size-16 rounded-lg"
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
    <section className="w-full h-full flex flex-col gap-8 p-2">
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
      <div className="w-full h-full grid grid-cols-3 place-items-center">
        <div className="w-full h-full flex items-center justify-center flex-col gap-4 px-4">
          <h1 className="text-4xl text-snow-200 font-bold">Estatísticas</h1>

          <div className="flex flex-col gap-5 2xl:gap-8 w-full h-full">
            <ExpenseCard variants="hollow">
              <div className="flex flex-1 items-center gap-2">
                <GiArcheryTarget className="text-7xl text-danger_red" />
                <div>
                  <h3 className="text-2xl font-bold text-snow-400">103</h3>
                  <p className="text-md text-snow-600">objetivos completos</p>
                </div>
              </div>
            </ExpenseCard>

            <ExpenseCard variants="hollow">
              <div className="flex flex-1 items-center gap-2">
                <FaBoltLightning className="text-7xl text-yellow-400" />
                <div>
                  <h3 className="text-2xl font-bold text-snow-400">
                    980.128.677
                  </h3>
                  <p className="text-md text-snow-600">
                    Total de experiencia obtida
                  </p>
                </div>
              </div>
            </ExpenseCard>

            <ExpenseCard variants="hollow">
              <div className="flex flex-1 items-center gap-2">
                <HiArrowTrendingUp className="text-7xl text-ofice_green" />
                <div>
                  <h3 className="text-2xl font-bold text-snow-400">
                    {moneyFormatter.format(5033)}
                  </h3>
                  <p className="text-md text-snow-600">
                    Total de dinheiro ganho
                  </p>
                </div>
              </div>
              <div className="absolute py-1 px-3 text-lg bg-ofice_green rounded-full text-snow-200 font-bold -top-3 right-2">
                Ultimo mês
              </div>
            </ExpenseCard>
          </div>
        </div>

        <div className="w-full h-full flex items-center justify-center flex-col gap-4">
          <h1 className="text-snow-400 text-4xl font-bold ">
            Minhas Conquistas
          </h1>

          <div className="w-full h-full grid grid-cols-3 place-items-center gap-4 px-5">
            <div className="rounded-lg overflow-hidden p-1 flex flex-col items-center">
              <Image
                className="aspect-square border-4 border-apple_green rounded-lg"
                alt="conquista"
                src={Throphy}
              />
              <h1 className="w-full mt-1 text-center text-snow-400 font-bold">
                Ganho insano
              </h1>
              <p className="w-full text-center mt-0.5 text-sm max-w-40 text-snow-600">
                ganhe mais de R$300 em uma semana
              </p>
            </div>

            <div className="rounded-lg overflow-hidden p-1 flex flex-col items-center">
              <Image
                className="aspect-square border-4 border-apple_green rounded-lg"
                alt="conquista"
                src={Throphy}
              />
              <h1 className="w-full mt-1 text-center text-snow-400 font-bold">
                Ganho insano
              </h1>
              <p className="w-full text-center mt-0.5 text-sm max-w-40 text-snow-600">
                ganhe mais de R$300 em uma semana
              </p>
            </div>

            <div className="rounded-lg overflow-hidden p-1 flex flex-col items-center">
              <Image
                className="aspect-square border-4 border-apple_green rounded-lg"
                alt="conquista"
                src={Throphy}
              />
              <h1 className="w-full mt-1 text-center text-snow-400 font-bold">
                Ganho insano
              </h1>
              <p className="w-full text-center mt-0.5 text-sm max-w-40 text-snow-600">
                ganhe mais de R$300 em uma semana
              </p>
            </div>

            <div className="rounded-lg overflow-hidden p-1 flex flex-col items-center">
              <Image
                className="aspect-square border-4 border-apple_green rounded-lg"
                alt="conquista"
                src={Throphy}
              />
              <h1 className="w-full mt-1 text-center text-snow-400 font-bold">
                Ganho insano
              </h1>
              <p className="w-full text-center mt-0.5 text-sm max-w-40 text-snow-600">
                ganhe mais de R$300 em uma semana
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <div>
            <h1 className="text-snow-400 text-4xl font-bold ">Amigos</h1>
          </div>
          <div className="flex flex-col gap-2 w-full h-full">
            <MiniCard
              ImageAlt="image"
              ImageSRC={GAUCHO}
              level="9"
              name="Flavio Moura machado"
              nickname="Flavin corta guela"
            />

            <MiniCard
              ImageAlt="image"
              ImageSRC={CLEITON}
              level="41"
              name="Claiton Vieira Neto"
              nickname="Claitonrasta"
            />

            <MiniCard
              ImageAlt="image"
              ImageSRC={RT}
              level="97"
              name="Guilherme lima limoeiro"
              nickname="GuiRatão"
            />

            <MiniCard
              ImageAlt="image"
              ImageSRC={SMA}
              level="751"
              name="Lucas Irmões pires"
              nickname="Lucas Irmões pires"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default {
  MiniCard,
  FriendPage,
}
