import type { IconType } from 'react-icons'
import { tv, type VariantProps } from 'tailwind-variants'
import Link from 'next/link'

interface NavigationBarProps {
  children: React.ReactNode
}

function NavigationBar({ children }: NavigationBarProps) {
  return (
    <nav className="flex-1 antialiased ">
      <ul className="flex-1 flex flex-col w-full gap-2 text-snow-600">
        {children}
      </ul>
    </nav>
  )
}

const navlinkVariant = tv({
  base: 'flex items-center gap-2 text-lg px-6 py-4',

  variants: {
    isActive: {
      true: 'rounded-xl bg-apple_green mx-1',
      false: 'hover:bg-apple_green/10 transition-all',
    },
  },

  defaultVariants: {
    isActive: false,
  },
})

interface NavlinkProps extends VariantProps<typeof navlinkVariant> {
  Icon: IconType
  title: string
  href: string
  className?: string
}

function NavLink({ title, Icon, isActive, className, href }: NavlinkProps) {
  return (
    <li className="relative group">
      <Link href={href} className={navlinkVariant({ isActive, className })}>
        <Icon
          size={28}
          className={
            !isActive
              ? 'text-snow-600 group-hover:text-apple_green transition-all'
              : 'text-snow-200'
          }
        />
        <p
          className={
            !isActive
              ? 'text-snow-400 group-hover:text-apple_green transition-all'
              : 'text-snow-200'
          }
        >
          {title}
        </p>
      </Link>
    </li>
  )
}

NavigationBar.NavLink = NavLink

export { NavigationBar }
