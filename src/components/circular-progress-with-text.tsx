import { tv, type VariantProps } from 'tailwind-variants'

const CircularProgressWithTextVariant = tv({
  slots: {
    base: 'rounded-full flex items-center justify-center border border-snow-800',
    innerCircle:
      'bg-snow-900 rounded-full flex items-center justify-center border border-snow-800/30',
    text: 'font-bold text-snow-400',
    percentageText: 'text-snow-600 text-center',
  },

  variants: {
    sizes: {
      xl: {
        base: 'size-64',
        innerCircle: 'size-60',
        text: 'text-5xl',
      },
      lg: {
        base: 'size-52',
        innerCircle: 'size-48',
        text: 'text-5xl',
      },
      md: {
        base: 'size-40',
        innerCircle: 'size-36',
        text: 'text-4xl font-medium',
      },
      sm: {
        base: 'size-20',
        innerCircle: 'size-16',
        text: 'hidden',
        percentageText: 'text-md',
      },
      xs: {
        base: 'size-10',
        innerCircle: 'size-8',
        text: 'hidden',
        percentageText: 'text-xs font-bold',
      },
    },
  },

  defaultVariants: {
    sizes: 'xl',
  },
})

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
  sizes,
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
    <div className={base({ sizes })} style={gradientStyle}>
      <div className={innerCircle({ sizes })}>
        <div>
          <p className={text({ sizes })}>
            {numberOfCompletions}/{totalNumber}
          </p>
          <p className={percentageText({ sizes })}>
            {calculateHowMuchPercentageInBaseOf2Values()}%
          </p>
        </div>
      </div>
    </div>
  )
}
