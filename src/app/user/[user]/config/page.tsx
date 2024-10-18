'use client'
import { Tabs } from '@/components/Tabs'
import { useState } from 'react'

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
            <div className="w-full bg-blue-300 flex flex-col flex-shrink-0">
              <form action="" className="w-full h-full flex flex-col">
                <div>
                  <label htmlFor="">Nome de usuario</label>
                  <input type="text" />
                </div>
              </form>
            </div>
          </Tabs.Tab>
        )}
      </Tabs>
    </section>
  )
}
