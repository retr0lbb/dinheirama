'use client'
import type React from 'react'
import { NavigationBar } from '@/components/navigation-bar'
import { HiOutlineCash } from 'react-icons/hi'
import { RxTarget } from 'react-icons/rx'
import { LuScroll } from 'react-icons/lu'
import { FaChartLine } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'
import RAL from '@/static/ralsei.jpg'
import { FaChevronRight } from 'react-icons/fa6'
import { UserProfileAvatar } from '@/components/user-profile-avatar'
import { useState } from 'react'
import { ChevronColapse } from '@/components/chevron-colapse'

interface UserLayoutProps {
  children: React.ReactNode
  params: {
    user: string
  }
}

export default function UserLayout({ children, params }: UserLayoutProps) {
  const { user } = params
  const pathName = usePathname()
  const [isColapsed, setIsColapsed] = useState(false)

  return (
    <section className="h-screen overflow-hidden pb-24 md:pb-0 flex bg-snow-900">
      <div className="fixed bottom-0 left-0 md:relative h-auto md:h-full flex md:flex flex-col border-t md:border-r bg-snow-800 md:bg-snow-800/40 border-snow-600/10 shadow shadow-snow-600 py-5 gap-4 flex-grow flex-shrink-0 w-full md:w-auto">
        <ChevronColapse
          onClick={() => setIsColapsed(prev => !prev)}
          isActive={isColapsed}
        />

        <NavigationBar
          isMobile={{
            md: false,
            initial: true,
          }}
          isColapsed={isColapsed}
        >
          <NavigationBar.NavLink
            href={`/user/${user}`}
            Icon={HiOutlineCash}
            title="Saldo"
            isActive={{
              initial: pathName === `/user/${user}`,
              md: pathName === `/user/${user}`,
            }}
            isColapsed={isColapsed}
          />
          <NavigationBar.NavLink
            href={`/user/${user}/objectives`}
            Icon={RxTarget}
            title="Objetivos"
            isActive={{
              initial: pathName === `/user/${user}/objectives`,
              md: pathName === `/user/${user}/objectives`,
            }}
            isColapsed={isColapsed}
          />
          <NavigationBar.NavLink
            href={`/user/${user}/missions`}
            Icon={LuScroll}
            title="Missões"
            isActive={{
              initial: pathName === `/user/${user}/missions`,
              md: pathName === `/user/${user}/missions`,
            }}
            isColapsed={isColapsed}
          />
          <NavigationBar.NavLink
            href={`/user/${user}/investments`}
            Icon={FaChartLine}
            title="Investimentos"
            isActive={{
              initial: pathName === `/user/${user}/investments`,
              md: pathName === `/user/${user}/investments`,
            }}
            isColapsed={isColapsed}
          />
        </NavigationBar>

        <UserProfileAvatar
          isColapsed={isColapsed}
          realName="Henrique Barbosa Sampaio"
          user={user}
          imageSrc={RAL}
        />
      </div>

      {children}
    </section>
  )
}
