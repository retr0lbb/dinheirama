import type { IconType } from 'react-icons'
import { tv, type VariantProps } from 'tailwind-variants'
import Link from 'next/link'
import { motion } from 'framer-motion'

const NavigationBarVariants = tv(
  {
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
          label: 'hidden text-lg',
          icon: 'text-3xl text-snow-600',
        },
        false: {
          bar: 'h-full flex flex-col flex-1 justify-center w-full items-baseline gap-2 flex-shrink-0',
          link: 'hover:bg-apple_green/10 transition-all w-full flex flex-1 justify-start',
          icon: 'text-snow-600 group-hover:text-apple_green transition-all',
          label:
            'block text-snow-600 text-xl group-hover:text-apple_green transition-all',
        },
      },
      isActive: {
        true: {
          link: 'bg-apple_green py-3 px-4 rounded-full md:rounded-xl md:bg-apple_green md:mx-1 md:hover:bg-apple_green ',
          icon: 'text-snow-200 md:group-hover:text-snow-200',
          label: 'block md:text-snow-200 md:group-hover:text-snow-200',
        },
        false: {},
      },

      isColapsed: {
        true: {
          label: 'md:hidden',
          link: 'md:items-center md:justify-center',
          bar: 'md:items-center md:px-3',
        },
      },
    },

    defaultVariants: {
      isActive: false,
      isMobile: false,
      isColapsed: false,
    },
  },
  {
    responsiveVariants: ['md'],
  }
)

const { bar, icon, label, link } = NavigationBarVariants()

interface NavigationBarVariantsProps
  extends Omit<VariantProps<typeof NavigationBarVariants>, 'isActive'> {}

interface NavigationBarProps extends NavigationBarVariantsProps {
  children: React.ReactNode
}

function NavigationBar({ children, isColapsed }: NavigationBarProps) {
  return (
    <nav className="w-full h-full">
      <ul
        className={bar({
          isColapsed,
          isActive: false,
          isMobile: { initial: true, md: false },
        })}
      >
        {children}
      </ul>
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
  isColapsed,
}: NavlinkProps) {
  return (
    <li className="relative group md:w-full flex">
      <Link
        href={href}
        className={link({
          className,
          isActive,
          isMobile: { initial: true, md: false },
          isColapsed,
        })}
      >
        <Icon
          size={28}
          className={icon({
            isActive,
            isMobile: { initial: true, md: false },
            isColapsed,
          })}
        />
        <motion.p
          className={label({
            isActive,
            isMobile: { initial: true, md: false },
            isColapsed,
          })}
        >
          {title}
        </motion.p>
      </Link>
    </li>
  )
}

NavigationBar.NavLink = NavLink

export { NavigationBar }
