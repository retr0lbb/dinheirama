import type { IconType } from 'react-icons'
import { tv, type VariantProps } from 'tailwind-variants'
import Link from 'next/link'

const NavigationBarVariants = tv({
  slots: {
    bar: 'flex-1 flex flex-col w-full gap-2 text-snow-600',
    link: 'flex items-center gap-2 text-lg px-6 py-4',
    icon: 'text-snow-200',
    label: 'text-snow-200',
  },

  variants: {
    isMobile: {
      true: {},
      false: {},
    },
    isActive: {
      true: {},
      false: {},
    },
  },

  compoundVariants: [
    {
      isMobile: false,
      isActive: true,
      class: {
        link: 'rounded-xl bg-apple_green mx-1',
        icon: 'text-snow-200',
        label: 'text-snow-200',
      },
    },
    {
      isMobile: false,
      isActive: false,
      class: {
        link: 'hover:bg-apple_green/10 transition-all',
        icon: 'text-snow-600 group-hover:text-apple_green transition-all',
        label: 'text-snow-400 group-hover:text-apple_green transition-all',
      },
    },
  ],

  defaultVariants: {
    isActive: false,
    isMobile: false,
  },
})

const { bar, icon, label, link } = NavigationBarVariants()

interface NavigationBarVariantsProps
  extends VariantProps<typeof NavigationBarVariants> {}

interface NavigationBarProps extends NavigationBarVariantsProps {
  children: React.ReactNode
}

function NavigationBar({ children, isActive, isMobile }: NavigationBarProps) {
  return (
    <nav className="flex-1 antialiased ">
      <ul className={bar({ isActive, isMobile })}>{children}</ul>
    </nav>
  )
}

interface NavlinkProps extends VariantProps<typeof NavigationBarVariants> {
  Icon: IconType
  title: string
  href: string
  className?: string
}

function NavLink({
  title,
  Icon,
  isActive,
  className,
  href,
  isMobile,
}: NavlinkProps) {
  return (
    <li className="relative group">
      <Link href={href} className={link({ className, isActive, isMobile })}>
        <Icon size={28} className={icon({ isActive, isMobile })} />
        <p className={label({ isActive, isMobile })}>{title}</p>
      </Link>
    </li>
  )
}

NavigationBar.NavLink = NavLink

export { NavigationBar }
