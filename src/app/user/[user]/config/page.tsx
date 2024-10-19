'use client'
import { Tabs } from '@/components/Tabs'
import { Input } from '@/components/input'
import Image from 'next/image'
import { useState } from 'react'
import RALSEI from '@/static/ralsei.jpg'
import BANCOOFBRASIL from '@/static/banco-do-brasil-85782.svg'
import { moneyFormatter } from '@/utils/money-string-formatter'
import { SiNubank, SiMastercard } from 'react-icons/si'
import { BankCard, type CardProps } from '@/components/stacked-cards/bank-card'
import { Button } from '@/components/button'
import { RiVisaLine } from 'react-icons/ri'
import { BankAccountCard } from '@/components/bank-account-card'

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
            <div className="w-full h-full flex items-center justify-center flex-shrink-0">
              <div className="flex flex-col p-2 gap-5 h-full">
                <div className="flex flex-col gap-4">
                  <div className="flex w-full items-center gap-2 justify-between">
                    <h2 className="text-xl flex flex-1 w-full text-snow-600 font-bold">
                      Contas bancarias
                    </h2>
                    <div>
                      <Button>Adicionar Nova</Button>
                    </div>
                  </div>

                  <div className="flex flex-1 items-center w-full gap-3 flex-col">
                    <BankAccountCard
                      accountNumber="1292-0"
                      accountOwner="Henrique Barbosa Sampaio"
                      accountType="Poupança"
                      balance={127891.76}
                      BankLogo={SiNubank}
                      ConectedCardLogo={SiMastercard}
                    />

                    <BankAccountCard
                      accountNumber="4600-X"
                      accountOwner="Henrique Barbosa Sampaio"
                      accountType="Corrente"
                      balance={623.81}
                      BankLogo={SiNubank}
                      ConectedCardLogo={RiVisaLine}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 h-full w-full bg-red-500">a</div>
            </div>
          </Tabs.Tab>
        )}
      </Tabs>
    </section>
  )
}
