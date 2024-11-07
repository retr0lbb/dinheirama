import { RangeSliderShown } from '../slider-shown'
import { moneyFormatter } from '@/utils/money-string-formatter'
import type { IconType } from 'react-icons'
import { FaDollarSign } from 'react-icons/fa'

export interface ObjectiveHeaderProps {
  title: string
  actualMoney: number
  totalMoney: number
  Icon?: IconType
}

export function ObjectiveHeader({
  title,
  actualMoney,
  totalMoney,
  Icon = FaDollarSign,
}: ObjectiveHeaderProps) {
  if (!title || !actualMoney || !totalMoney) {
    return 'Nenhum objetivo para cumprir agora'
  }
  return (
    <div className="rounded-xl p-5 col-span-5 flex flex-col justify-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-snow-400 text-xl md:text-2xl font-bold">
          Para o proximo objetivo
        </h1>
        <div className="flex items-center">
          <div className="flex flex-1 items-center gap-0.5 md:gap-2">
            <Icon className="text-apple_green size-10 md:size-16 p-1 md:p-2" />
            <h1 className="text-snow-400 text-xs md:text-lg">{title}</h1>
          </div>
          <div>
            <p className="text-snow-400 md:text-3xl">
              {moneyFormatter.format(actualMoney)}/
              <span className="text-snow-600">
                {moneyFormatter.format(totalMoney)}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center w-full gap-2 text-snow-400">
        <RangeSliderShown
          minValue={0}
          percentage={actualMoney}
          maxValue={totalMoney}
        />
      </div>
    </div>
  )
}
