'use client'
import { Tabs } from '@/components/Tabs'
import { Input } from '@/components/input'
import Image from 'next/image'
import { useState } from 'react'
import RALSEI from '@/static/ralsei.jpg'

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
                  <Input Title="Nome de usuario">
                    <Input.Field value={'retr0lbb'} />
                  </Input>
                </div>

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
                  <Input Title="Biografia">
                    <Input.Field
                      type="text"
                      value={
                        'Olá sou um jovem de 18 anos que busca economizar e comprar o meu carro dos sonhos um subaru impreza 2018'
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
            <div className="w-full flex flex-col items-center justify-center flex-shrink-0"></div>
          </Tabs.Tab>
        )}
      </Tabs>
    </section>
  )
}
