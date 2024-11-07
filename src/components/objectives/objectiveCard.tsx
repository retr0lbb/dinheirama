import { RangeSliderShown } from '../slider-shown'
import { moneyFormatter } from '@/utils/money-string-formatter'
import { FaRegCircleCheck } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import { BsThreeDotsVertical } from 'react-icons/bs'

export interface ObjectiveCardProps {
  totalAmmount: number
  actualAmmount: number

  objectiveTitle: string
  ObjectiveIcon: IconType
  isCompleted?: boolean
}

export function ObjectiveCard({
  actualAmmount,
  ObjectiveIcon,
  objectiveTitle,
  totalAmmount,
  isCompleted,
}: ObjectiveCardProps) {
  return (
    <div className="p-2 bg-snow-800 rounded-md relative flex gap-1 w-full overflow-hidden">
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center justify-center gap-2">
            <ObjectiveIcon className="text-apple_green" />
            <h1 className="text-sm">{objectiveTitle}</h1>
          </div>

          <p className="md:text-sm flex flex-col md:flex-row items-center text-xs">
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

      <div className="flex items-center justify-center text-2xl text-snow-600 cursor-pointer pl-1 hover:text-snow-400">
        <BsThreeDotsVertical />
      </div>

      {isCompleted && (
        <div className="m-0 absolute inset-0 top-0 left-0 flex items-center rounded-md justify-center text-3xl text-ofice_green bg-snow-900/60 border border-snow-800">
          <FaRegCircleCheck />
        </div>
      )}
    </div>
  )
}
