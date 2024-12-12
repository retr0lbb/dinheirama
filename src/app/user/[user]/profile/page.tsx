'use client'
import Image from 'next/image'
import PROFILEPIC from '@/static/ralsei.jpg'
import GAUCHO from '@/static/gaucho.jpg'
import Throphy from '@/static/minthrophy.webp'
import BGIMAGE from '@/static/bg-image.webp'
import { ExpenseCard } from '@/components/expenses/expenses-card'
import RT from '@/static/rt.jpg'
import CLEITON from '@/static/clietip.webp'
import SMA from '@/static/sma.webp'
import FriendsCard, { type miniCardProps } from '@/components/friends-card'
import { GiArcheryTarget, GiScrollUnfurled } from 'react-icons/gi'
import { FaBoltLightning } from 'react-icons/fa6'
import { moneyFormatter } from '@/utils/money-string-formatter'
import { HiArrowTrendingUp } from 'react-icons/hi2'
import { Modal } from '@/components/modal'
import { useState } from 'react'

/**
 * Atenção, trocar para request de pagina usando api depois que todo o design estiver pronto
 * criar um servidor falso e atualizar as informações do usuario por lá até o servidor estar bom
 */

export default function ProfilePage() {
  const [userModalInfo, setUserModalInfo] =
    useState<Omit<miniCardProps, 'onClick'>>()
  const [isModalOpen, setModalOpen] = useState(false)

  function handleSeeFriendsPage(data: Omit<miniCardProps, 'onClick'>) {
    try {
      setUserModalInfo(data)
      setModalOpen(true)
    } catch (error) {
      new Error('Not able to see friends page')
    }
  }
  return (
    <section className="w-full h-full flex flex-col gap-8 p-5 relative">
      <div className="flex w-full items-center justify-around relative z-10">
        <Image
          src={BGIMAGE}
          alt="your wallpaper"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="flex w-full items-center justify-center gap-4 z-10 bg-snow-900/60 p-2">
          <Image
            alt="your profile picture"
            className="rounded-xl size-24 md:size-36"
            src={PROFILEPIC}
          />
          <div className="flex flex-col text-snow-400 w-full">
            <h1 className="text-4xl md:text-7xl font-bold leading-none">
              retr0lbb
            </h1>
            <p className="text-sm text-snow-600">Henrique Barbosa Sampaio</p>
            <p className="text-md text-snow-600">
              lvl <span className="text-ofice_green font-bold text-md">48</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-full grid overflow-y-scroll md:overflow-hidden grid-cols-1 md:grid-cols-3 place-items-center">
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

        <div className="w-full h-full flex items-center justify-center flex-col gap-4 pt-10 md:pt-0">
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
            <FriendsCard.MiniCard
              onClick={() =>
                handleSeeFriendsPage({
                  ImageAlt: 'image',
                  ImageSRC: GAUCHO,
                  level: '9',
                  name: 'Flavio Moura machado',
                  nickname: 'Flavin corta guela',
                })
              }
              ImageAlt="image"
              ImageSRC={GAUCHO}
              level="9"
              name="Flavio Moura machado"
              nickname="Flavin corta guela"
            />

            <FriendsCard.MiniCard
              onClick={() =>
                handleSeeFriendsPage({
                  ImageAlt: 'image',
                  ImageSRC: CLEITON,
                  level: '41',
                  name: 'Claiton Vieira Neto',
                  nickname: 'Claitonrasta',
                })
              }
              ImageAlt="image"
              ImageSRC={CLEITON}
              level="41"
              name="Claiton Vieira Neto"
              nickname="Claitonrasta"
            />

            <FriendsCard.MiniCard
              onClick={() =>
                handleSeeFriendsPage({
                  ImageAlt: 'image',
                  ImageSRC: RT,
                  level: '97',
                  name: 'Guilherme lima limoeiro',
                  nickname: 'GuiRatão',
                })
              }
              ImageAlt="image"
              ImageSRC={RT}
              level="97"
              name="Guilherme lima limoeiro"
              nickname="GuiRatão"
            />

            <FriendsCard.MiniCard
              onClick={() =>
                handleSeeFriendsPage({
                  ImageAlt: 'image',
                  ImageSRC: SMA,
                  level: '751',
                  name: 'Lucas Irmões pires',
                  nickname: 'Lucas Irmões pires',
                })
              }
              ImageAlt="image"
              ImageSRC={SMA}
              level="751"
              name="Lucas Irmões pires"
              nickname="Lucas Irmões pires"
            />
          </div>
        </div>
      </div>

      <Modal sizes="almostFull" visible={isModalOpen}>
        <Modal.Title onCloseButtonClick={() => setModalOpen(false)} title="" />
        <Modal.Body>
          {userModalInfo ? <FriendsCard.FriendPage {...userModalInfo} /> : ''}
        </Modal.Body>
      </Modal>
    </section>
  )
}
