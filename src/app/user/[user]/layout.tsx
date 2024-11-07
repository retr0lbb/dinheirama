'use client'
import type React from 'react'
import { NavigationBar } from '@/components/navigation-bar'
import { HiOutlineCash } from 'react-icons/hi'
import { RxTarget } from 'react-icons/rx'
import { LuScroll } from 'react-icons/lu'
import { FaChartLine } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'
import RAL from '@/static/ralsei.jpg'
import Image from 'next/image'
import Link from 'next/link'

interface UserLayoutProps {
  children: React.ReactNode
  params: {
    user: string
  }
}

export default function UserLayout({ children, params }: UserLayoutProps) {
  const { user } = params
  const pathName = usePathname()

  return (
    <section className="h-screen overflow-hidden pb-24 md:pb-0 flex bg-snow-900">
      <div className="fixed bottom-0 left-0 md:relative h-auto md:h-full flex md:flex flex-col border-t md:border-r bg-snow-800 md:bg-snow-800/40 border-snow-600/10 shadow shadow-snow-600 py-5 gap-4 w-full md:min-w-60 md:max-w-80">
        <NavigationBar isMobile={false}>
          <NavigationBar.NavLink
            href={`/user/${user}`}
            Icon={HiOutlineCash}
            title="Saldo"
            isActive={pathName === `/user/${user}`}
            isMobile={false}
          />
          <NavigationBar.NavLink
            href={`/user/${user}/objectives`}
            Icon={RxTarget}
            title="Objetivos"
            isActive={pathName === `/user/${user}/objectives`}
            isMobile={false}
          />
          <NavigationBar.NavLink
            href={`/user/${user}/missions`}
            Icon={LuScroll}
            title="Missões"
            isActive={pathName === `/user/${user}/missions`}
            isMobile={false}
          />
          <NavigationBar.NavLink
            href={`/user/${user}/investments`}
            Icon={FaChartLine}
            title="Investimentos"
            isActive={pathName === `/user/${user}/investments`}
            isMobile={false}
          />
        </NavigationBar>

        <Link
          href={`/user/${user}/profile`}
          className="hidden md:flex items-center justify-center border border-transparent cursor-pointer hover:border-snow-600 transition-all gap-2 mx-4 p-2 rounded-lg "
        >
          <Image
            src={RAL}
            alt="my profile picture"
            className="size-16 aspect-square rounded-full"
          />
          <div className="h-full w-full flex flex-col gap-1 py-1 px-0.5">
            <div className="w-full flex items-center justify-between">
              <h1 className="text-lg font-bold text-snow-400">{user}</h1>{' '}
              <p className="text-xs text-apple_green">lv 48</p>
            </div>
            <p className="text-xs whitespace-nowrap text-snow-600">
              Henrique Barbosa Sampaio
            </p>
          </div>
        </Link>
      </div>

      {children}
    </section>
  )
}
