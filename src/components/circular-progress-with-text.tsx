import { tv, type VariantProps } from 'tailwind-variants'

const CircularProgressWithTextVariant = tv(
  {
    slots: {
      base: 'rounded-full flex items-center justify-center border border-snow-800',
      innerCircle:
        'bg-snow-900 rounded-full flex items-center justify-center border border-snow-800/30',
      text: 'font-bold text-snow-400',
      percentageText: 'text-snow-600 text-center',
    },

    variants: {
      size: {
        extraLarge: {
          base: 'w-64 h-64',
          innerCircle: 'w-60 h-60',
          text: 'text-5xl',
        },
        large: {
          base: 'w-52 h-52',
          innerCircle: 'w-48 h-48',
          text: 'text-5xl',
        },
        medium: {
          base: 'w-40 h-40',
          innerCircle: 'w-36 h-36',
          text: 'text-4xl font-medium',
        },
        small: {
          base: 'w-20 h-20',
          innerCircle: 'w-16 h-16',
          text: 'hidden',
          percentageText: 'text-md',
        },
        extraSmall: {
          base: 'w-10 h-10',
          innerCircle: 'w-8 h-8',
          text: 'hidden',
          percentageText: 'text-xs font-bold',
        },
      },
    },

    defaultVariants: {
      size: 'extraLarge',
    },
  },
  {
    responsiveVariants: ['xl', 'lg', 'md', 'sm'],
  }
)

const { base, innerCircle, percentageText, text } =
  CircularProgressWithTextVariant()

export interface CircularProgressWithTextProps
  extends VariantProps<typeof CircularProgressWithTextVariant> {
  totalNumber: number
  numberOfCompletions: number
}

export function CircularProgressWithText({
  totalNumber,
  numberOfCompletions,
  size,
}: CircularProgressWithTextProps) {
  function calculateHowMuchPercentageInBaseOf2Values() {
    if (!totalNumber || !numberOfCompletions) {
      return ''
    }

    if (totalNumber === 0) {
      return 0
    }
    const numericValue = (numberOfCompletions / totalNumber) * 100

    return Math.round(numericValue)
  }

  const gradientStyle = {
    background: `conic-gradient(#72B01D ${calculateHowMuchPercentageInBaseOf2Values()}%, #0A0A0A ${calculateHowMuchPercentageInBaseOf2Values()}% 100%)`,
  }

  return (
    <div className={base({ size })} style={gradientStyle}>
      <div className={innerCircle({ size })}>
        <div>
          <p className={text({ size })}>
            {numberOfCompletions}/{totalNumber}
          </p>
          <p className={percentageText({ size })}>
            {calculateHowMuchPercentageInBaseOf2Values()}%
          </p>
        </div>
      </div>
    </div>
  )
}
