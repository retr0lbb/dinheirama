import { RangeSliderShown } from '../slider-shown'
import { moneyFormatter } from '@/utils/money-string-formatter'
import type { IconType } from 'react-icons'

interface ObjectiveCardProps {
  totalAmmount: number
  actualAmmount: number

  objectiveTitle: string
  ObjectiveIcon: IconType
}

export function ObjectiveCard({
  actualAmmount,
  ObjectiveIcon,
  objectiveTitle,
  totalAmmount,
}: ObjectiveCardProps) {
  return (
    <div className="p-2 bg-snow-800 rounded-md space-y-2">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center justify-center gap-2 text-lg">
          <ObjectiveIcon className="text-apple_green" />
          <h1>{objectiveTitle}</h1>
        </div>

        <p className="text-sm">
          {moneyFormatter.format(actualAmmount)}/
          <span className="text-snow-600">
            {moneyFormatter.format(totalAmmount)}
          </span>
        </p>
      </div>
      <RangeSliderShown
        minValue={0}
        maxValue={totalAmmount}
        percentage={actualAmmount}
      />
    </div>
  )
}
