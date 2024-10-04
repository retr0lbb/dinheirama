import { generateRandomId } from '@/utils/generateRandomId'

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
    minValue = 0
  ): number {
    const inPercent = (currentValue / (maxValue - minValue)) * 100
    if (currentValue > maxValue) {
      return 100
    }
    if (inPercent < 0.5) {
      return 0
    }
    if (inPercent > 100) {
      return 100
    }
    return Math.ceil(inPercent) // Retorna o valor arredondado para 2 casas decimais
  }

  return (
    <div className="w-full h-3 relative rounded-full border border-snow-600/20 bg-snow-800">
      <div
        style={{
          width: `${returnInPercentHowMuchIsValue(maxValue, percentage)}%`,
        }}
        className="absolute flex items-center justify-end rounded-full inset-0 bg-apple_green"
      />
    </div>
  )
}

export interface ParticionedSliderProgressProps {
  numberOfDivisions: number
  numberOfCompletions: number
}

export function ParticionedSliderProgress({
  numberOfCompletions,
  numberOfDivisions,
}: ParticionedSliderProgressProps) {
  function generatePartitionedBars(completions: number, divisions: number) {
    const partitionedItemsArray = []
    let numberOfCompletios = completions

    for (let i = 0; i < divisions; i++) {
      if (numberOfCompletios > 0) {
        const div = (
          <div
            key={generateRandomId()}
            className="w-full h-full bg-apple_green"
          />
        )
        partitionedItemsArray.push(div)
        numberOfCompletios -= 1
      } else {
        const div = (
          <div
            key={generateRandomId()}
            className="w-full h-full border border-snow-600 bg-snow-800"
          />
        )
        partitionedItemsArray.push(div)
      }
    }

    return partitionedItemsArray
  }

  return (
    <div className="w-full min-h-3 rounded-full border border-snow-600/20 flex items-center gap-0.5 overflow-hidden">
      {generatePartitionedBars(numberOfCompletions, numberOfDivisions)}
    </div>
  )
}
