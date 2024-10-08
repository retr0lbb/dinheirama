import Image from 'next/image'
import PROFILEPIC from '@/static/ralsei.jpg'
import GAUCHO from '@/static/gaucho.jpg'
import BGIMAGE from '@/static/bg-image.webp'
import { ExpenseCard } from '@/components/expenses/expenses-card'
import RT from '@/static/rt.jpg'
import CLEITON from '@/static/clietip.webp'
import SMA from '@/static/sma.webp'
import FriendsCard from '@/components/friends-card'
import { GiArcheryTarget, GiScrollUnfurled } from 'react-icons/gi'
import { FaBoltLightning } from 'react-icons/fa6'
import { moneyFormatter } from '@/utils/money-string-formatter'
import { HiArrowTrendingUp } from 'react-icons/hi2'

export default function ProfilePage() {
  return (
    <section className="w-full h-full flex flex-col gap-8 p-5">
      <div className="flex w-full items-center justify-around relative">
        <Image
          src={BGIMAGE}
          alt="your wallpaper"
          className="absolute inset-0 w-full h-full object-cover "
        />
        <div className="flex w-full items-center justify-center gap-4 z-10 bg-snow-900/60 p-2">
          <Image
            alt="your profile picture"
            className="rounded-xl size-36"
            src={PROFILEPIC}
          />
          <div className="flex flex-col text-snow-400 w-full">
            <h1 className="text-7xl font-bold leading-none">retr0lbb</h1>
            <p className="text-sm text-snow-600">Henrique Barbosa Sampaio</p>
            <p className="text-md text-snow-600">
              lvl <span className="text-ofice_green font-bold text-md">48</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-full grid grid-cols-3 place-items-center">
        <div className="w-full h-full p-4 flex items-center flex-col gap-4">
          <h1 className="text-3xl text-snow-200 font-bold pb-2">
            Estatísticas
          </h1>
          <ExpenseCard>
            <div className="flex flex-1 items-center gap-2">
              <GiArcheryTarget className="text-4xl text-danger_red" />
              <div>
                <h3 className="text-xl font-bold text-snow-400">103</h3>
                <p className="text-sm text-snow-600">objetivos completos</p>
              </div>
            </div>
          </ExpenseCard>

          <ExpenseCard>
            <div className="flex flex-1 items-center gap-2">
              <GiScrollUnfurled className="text-4xl text-dang_blue" />
              <div>
                <h3 className="text-xl font-bold text-snow-400">4</h3>
                <p className="text-sm text-snow-600">Missões semanais</p>
              </div>
            </div>
            <div className="absolute py-1 px-3 text-lg bg-dang_blue rounded-full text-snow-200 font-bold -top-3 right-2">
              2 dias restantes
            </div>
          </ExpenseCard>

          <ExpenseCard>
            <div className="flex flex-1 items-center gap-2">
              <FaBoltLightning className="text-4xl text-yellow-400" />
              <div>
                <h3 className="text-xl font-bold text-snow-400">1.474.392</h3>
                <p className="text-sm text-snow-600">Experiência total</p>
              </div>
            </div>
          </ExpenseCard>

          <ExpenseCard>
            <div className="flex flex-1 items-center gap-2">
              <HiArrowTrendingUp className="text-4xl text-apple_green" />
              <div>
                <h3 className="text-xl font-bold text-snow-400">
                  {moneyFormatter.format(492.78)}
                </h3>
                <p className="text-sm text-snow-600">
                  Dinheiro ganho no ultimo mês
                </p>
              </div>
            </div>
            <div className="absolute py-1 px-3 text-lg bg-apple_green rounded-full text-snow-200 font-bold -top-3 right-2">
              Ultimos 30 dias
            </div>
          </ExpenseCard>
        </div>

        <div className="w-full h-full bg-cyan-200 grid grid-cols-2 grid-rows-3 items-center" />
        <div className="w-full h-full flex flex-col items-center gap-2">
          <div>
            <h1 className="text-snow-400 text-4xl font-bold ">Amigos</h1>
          </div>

          <FriendsCard.miniCard
            ImageAlt="image"
            ImageSRC={GAUCHO}
            level="9"
            name="Flavio Moura machado"
            nickname="Flavin corta guela"
          />

          <FriendsCard.miniCard
            ImageAlt="image"
            ImageSRC={CLEITON}
            level="41"
            name="Claiton Vieira Neto"
            nickname="Claitonrasta"
          />

          <FriendsCard.miniCard
            ImageAlt="image"
            ImageSRC={RT}
            level="97"
            name="Guilherme lima limoeiro"
            nickname="GuiRatão"
          />

          <FriendsCard.miniCard
            ImageAlt="image"
            ImageSRC={SMA}
            level="751"
            name="Lucas Irmões pires"
            nickname="Lucas Irmões pires"
          />
        </div>
      </div>
    </section>
  )
}
