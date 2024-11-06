import type { IconType } from 'react-icons'
import { tv, type VariantProps } from 'tailwind-variants'
import Link from 'next/link'

const classname = 'flex items-center justify-around '
const NavigationBarVariants = tv({
  slots: {
    bar: 'flex flex-col overflow-hidden h-14 w-full gap-2 text-snow-600',
    link: 'flex items-center gap-2 text-lg px-6 py-4',
    icon: 'text-snow-200',
    label: 'text-snow-200',
  },

  variants: {
    isMobile: {
      true: {
        bar: 'flex flex-row items-center justify-evenly gap-0 overflow-y-hidden overflow-x-auto',
        label: 'hidden',
        icon: 'text-3xl',
      },
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

    {
      isMobile: true,
      isActive: true,
      class: {
        link: 'bg-apple_green py-3 px-4 rounded-full',
        label: 'block',
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
  extends Omit<VariantProps<typeof NavigationBarVariants>, 'isActive'> {}

interface NavigationBarProps extends NavigationBarVariantsProps {
  children: React.ReactNode
}

function NavigationBar({ children, isMobile }: NavigationBarProps) {
  return (
    <nav>
      <ul className={bar({ isActive: false, isMobile })}>{children}</ul>
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
