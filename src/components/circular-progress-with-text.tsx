import { tv } from 'tailwind-variants'

const CircularProgressWithTextVariant = tv({
  base: 'rounded-full flex items-center justify-center border border-snow-800',

  variants: {
    sizes: {
      xl: 'size-64',
      lg: 'size-52',
      md: 'size-40',
      sm: 'size-20',
      xs: 'size-8',
    },
  },
})

const CircularProgressWithTextVariantInner = tv({
  base: 'size-60 bg-snow-900 rounded-full flex items-center justify-center border border-snow-800/30',

  variants: {
    sizes: {
      xl: 'size-60',
      lg: 'size-48',
      md: 'size-36',
      sm: 'size-16',
      xs: 'size-6',
    },
  },
})

export interface CircularProgressWithTextProps {
  totalNumber: number
  numberOfCompletions: number
}

export function CircularProgressWithText({
  totalNumber,
  numberOfCompletions,
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
    <div
      className="size-64 rounded-full flex items-center justify-center border border-snow-800"
      style={gradientStyle}
    >
      <div className="size-60 bg-snow-900 rounded-full flex items-center justify-center border border-snow-800/30">
        <div>
          <p className="text-5xl font-bold text-snow-400">
            {numberOfCompletions}/{totalNumber}
          </p>
          <p className="text-snow-600 text-center">
            {calculateHowMuchPercentageInBaseOf2Values()}%
          </p>
        </div>
      </div>
    </div>
  )
}
