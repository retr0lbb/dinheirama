'use client'
import { Tabs } from '@/components/Tabs'
import { Input } from '@/components/input'
import Image from 'next/image'
import { useState } from 'react'
import RALSEI from '@/static/ralsei.jpg'
import { moneyFormatter } from '@/utils/money-string-formatter'
import { SiNubank, SiMastercard } from 'react-icons/si'
import { BankCard, type CardProps } from '@/components/stacked-cards/bank-card'

export default function ConfigurationPage() {
  const [selectedTab, setSelectedTab] = useState('user')
  return (
    <section className="w-full h-full flex flex-col gap-2 p-5">
      <Tabs>
        <Tabs.Buttons>
          <Tabs.Button
            tabId="user"
            tabName="Usuario"
            value={'user'}
            onChange={e => setSelectedTab(e.target.value)}
            isSelected={selectedTab === 'user'}
          />
          <Tabs.Button
            tabId="accounts"
            value={'accounts'}
            tabName="Contas conectadas"
            onChange={e => setSelectedTab(e.target.value)}
            isSelected={selectedTab === 'accounts'}
          />
        </Tabs.Buttons>

        {selectedTab === 'user' && (
          <Tabs.Tab tabName="Usuario">
            <div className="w-full flex flex-col items-center justify-center flex-shrink-0">
              <form action="" className="w-full h-full flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-snow-600 px-4" htmlFor="name">
                    foto de perfil
                  </label>
                  <div className="px-4">
                    <Image
                      className="size-40 rounded-lg cursor-pointer"
                      alt="your profile picture"
                      src={RALSEI}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Input Title="Nickname">
                    <Input.Field value={'retr0lbb'} />
                  </Input>
                </div>

                <div className="flex flex-col gap-2">
                  <Input Title="Nome completo">
                    <Input.Field
                      type="text"
                      value={'Henrique Barbosa Sampaio'}
                    />
                  </Input>
                </div>

                <div className="flex flex-col gap-2">
                  <Input Title="Data de nascimento">
                    <Input.Field type="date" />
                  </Input>
                </div>

                <div className="flex flex-col gap-2">
                  <Input Title="CPF">
                    <Input.Field type="text" value={'173.269.297-18'} />
                  </Input>
                </div>

                <div className="flex flex-col gap-2">
                  <Input Title="Biografia">
                    <Input.Field
                      type="text"
                      value={
                        'Sou o Lucas, tenho 18 anos e moro no Brasil. Amo videogames e sou parte da comunidade furry. Curto criar personagens e explorar mundos virtuais, além de me conectar com outras pessoas que compartilham desses hobbies.'
                      }
                    />
                  </Input>
                </div>

                <div className="flex flex-col gap-2">
                  <Input Title="Objetivo pessoal">
                    <Input.Field
                      type="text"
                      value={
                        'Meu objetivo é comprar um Subaru Impreza porque sempre admirei carros que combinam desempenho e estilo. O Impreza tem uma ótima reputação por sua durabilidade e tração nas quatro rodas, além de ser perfeito para dar aquela sensação de dirigir algo único.'
                      }
                    />
                  </Input>
                </div>
              </form>
            </div>
          </Tabs.Tab>
        )}

        {selectedTab === 'accounts' && (
          <Tabs.Tab tabName="Usuario">
            <div className="w-full flex flex-col items-center justify-center flex-shrink-0">
              <div className="w-full flex flex-col p-2 items-center justify-evenly gap-5">
                <div className="bg-snow-800 px-8 py-5 rounded-lg border flex justify-between gap-10 border-snow-600/20">
                  <div className="flex flex-1 flex-grow flex-col h-full gap-1">
                    <h1 className="font-bold text-3xl text-snow-400">
                      {moneyFormatter.format(200128)}
                    </h1>
                    <p className="text-sm text-snow-600 font-bold">
                      Henrique Barbosa Sampaio
                    </p>

                    <div className="text-4xl text-purple-600 flex flex-1 mt-4">
                      <SiNubank />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5 place-items-center">
                    <div className="flex flex-col gap-1">
                      <h1 className="text-snow-600 text-sm font-bold">
                        numero de conta
                      </h1>
                      <p className="text-2xl text-snow-400">6226-9</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1 className="text-snow-600 text-sm font-bold">
                        Tipo de conta
                      </h1>
                      <p className="text-2xl text-snow-400">Corrente</p>
                    </div>
                    <div className="flex flex-col gap-1 col-span-2">
                      <h1 className="text-snow-600 text-sm font-bold">
                        Cartões vinculados
                      </h1>

                      <div className="flex items-center justify-center gap-1">
                        <SiMastercard className="text-3xl text-snow-400 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-snow-800 px-8 py-5 rounded-lg border flex justify-between gap-10 border-snow-600/20">
                  <div className="flex flex-1 flex-grow flex-col h-full gap-1">
                    <h1 className="font-bold text-3xl text-snow-400">
                      {moneyFormatter.format(200128)}
                    </h1>
                    <p className="text-sm text-snow-600 font-bold">
                      Henrique Barbosa Sampaio
                    </p>

                    <div className="text-4xl text-purple-600 flex flex-1 mt-4">
                      <SiNubank />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5 place-items-center">
                    <div className="flex flex-col gap-1">
                      <h1 className="text-snow-600 text-sm font-bold">
                        numero de conta
                      </h1>
                      <p className="text-2xl text-snow-400">6226-9</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1 className="text-snow-600 text-sm font-bold">
                        Tipo de conta
                      </h1>
                      <p className="text-2xl text-snow-400">Corrente</p>
                    </div>
                    <div className="flex flex-col gap-1 col-span-2">
                      <h1 className="text-snow-600 text-sm font-bold">
                        Cartões vinculados
                      </h1>

                      <div className="flex items-center justify-center gap-1">
                        <SiMastercard className="text-3xl text-snow-400 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Tab>
        )}
      </Tabs>
    </section>
  )
}
