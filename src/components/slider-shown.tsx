interface RangeSlideShownProps {
  minValue?: number
  maxValue: number
  percentage: number
}
// ! important, only uses the referencee valued for both of percentage and values
// do not use for example min: 100 max:30300 and percentage 100%

export function RangeSliderShown({
  maxValue,
  percentage,
  minValue = 0,
}: RangeSlideShownProps) {
  function returnInPercentHowMuchIsValue(
    maxValue: number,
    currentValue: number,
    minValue: number = 0
  ): number {
    const inPercent = (currentValue / (maxValue - minValue)) * 100

    if (inPercent < 0.5) {
      return 0
    }

    return Math.ceil(inPercent) // Retorna o valor arredondado para 2 casas decimais
  }

  return (
    <div className="w-full h-3 relative rounded-full border border-snow-600/20 bg-snow-800">
      <div
        style={{
          width: `${returnInPercentHowMuchIsValue(maxValue, percentage, minValue)}%`,
        }}
        className={`absolute flex items-center justify-end rounded-full inset-0 bg-apple_green`}
      ></div>
    </div>
  )
}
