'use client'
import { FcSimCardChip } from 'react-icons/fc'
import { SiMastercard } from 'react-icons/si'
import { moneyFormatter } from '@/utils/money-string-formatter'
import { motion, useDragControls } from 'framer-motion'
import { tv } from 'tailwind-variants'
import type { VariantProps } from 'tailwind-variants'

interface cardData {
  accountType: 'Débito' | 'Crédito' | 'Poupança' | 'Outro'
  ammount: number
  accountLast4DigitsNumber?: number
  expirationDate: string
}

const bankCardVariant = tv({
  base: `absolute top-0 left-0 w-full cursor-pointer select-none aspect-video max-w-[550px] 
  rounded-xl md:rounded-3xl aspect-video px-4 py-3 lg:px-4 lg:py-6 flex 
  flex-col justify-evenly border border-snow-800/20`,
  variants: {
    Zindex: {
      50: 'z-index-50',
      40: 'z-index-40',
      30: 'z-index-30',
      20: 'z-index-20',
    },
    offset: {
      2: 'top-2 left-2',
      4: 'top-4 left-4',
      6: 'top-6 left-6',
      8: 'top-8 left-8',
    },
    gradientDirection: {
      br: 'bg-gradient-to-br',
      tr: 'bg-gradient-to-tr',
      none: '',
    },
    gradientColors: {
      violetToBlue: 'from-strong_violet to-dang_blue',
      greenToLime: 'from-apple_green to-ofice_green',
      gayToGray: 'bg-gradient-gray',
      toBloe: 'bg-gradient-smooth-blue',
      toRemedyRedToLead: 'bg-gradient-to-br from-red-600 to-red-800',
    },
  },

  defaultVariants: {
    gradientColors: 'violetToBlue',
    gradientDirection: 'br',
    Zindex: 20,
  },
})

const className = ''

export interface CardProps extends VariantProps<typeof bankCardVariant> {
  isDragAble: boolean
  className?: string
  cardData: cardData
  offset?: 2 | 4 | 6 | 8
  handleDragEnd?: () => void
}

export function BankCard({
  className,
  offset,
  gradientDirection,
  gradientColors,
  isDragAble,
  Zindex,
  cardData,
  handleDragEnd,
}: CardProps) {
  const controls = useDragControls()

  return (
    <motion.div
      drag={isDragAble === true ? 'y' : false}
      dragControls={controls}
      dragConstraints={{ top: -100, bottom: -10 }}
      dragDirectionLock={true}
      dragSnapToOrigin={true}
      dragElastic={0.2}
      initial={{
        top: 0,
        left: 0,
        zIndex: 0,
      }}
      animate={{
        top: offset ? offset * 4 : 0,
        left: offset ? offset * 4 : 0,
      }}
      onDragEnd={handleDragEnd}
      className={bankCardVariant({
        className,
        offset,
        gradientColors,
        gradientDirection,
        Zindex,
      })}
    >
      <div className="w-full flex items-center justify-between">
        <FcSimCardChip className="size-10 md:size-16" />
        <SiMastercard className="size-10 md:size-16 text-snow-200" />
      </div>

      <div className="flex flex-1 justify-center flex-col">
        <h1 className="text-snow-400 text-sm lg:text-xl">
          {cardData.accountType}
        </h1>
        <p className="text-snow-200 font-semibold text-3xl md:text-4xl lg:text-5xl">
          {moneyFormatter.format(cardData.ammount)}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-light text-snow-400 text-xs md:text-lg">
            Débito
          </h1>
          <p className="text-snow-200 font-semibold text-sm lg:text-2xl">
            <span>••••</span> <span>••••</span> <span>••••</span>{' '}
            <span>{`${cardData.accountLast4DigitsNumber ?? '0000'}`}</span>
          </p>
        </div>

        <div>
          <h1 className="font-light text-snow-400 text-xs md:text-lg">
            Data Validade
          </h1>
          <p className="font-semibold text-sm md:text-2xl text-snow-200">
            {cardData.expirationDate}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
