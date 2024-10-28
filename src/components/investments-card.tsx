import { moneyFormatter } from '@/utils/money-string-formatter'

interface InvestmentsCardProps {
  isFalling?: boolean
  actionName: string
  actionPerQuoteValue: number
  quantityOwned: number
}

export function InvestmentsCard({
  isFalling,
  actionName,
  actionPerQuoteValue,
  quantityOwned,
}: InvestmentsCardProps) {
  return (
    <div className="flex items-center w-full p-2 bg-snow-800 border border-snow-600/30 rounded gap-4">
      <div className="size-20 bg-red-400">this is a little square</div>
      <div className="flex flex-col flex-1 gap-1">
        <div className="flex items-center gap-2">
          <div
            className={`size-3 ${isFalling ? 'bg-danger_red' : 'bg-apple_green'} rounded-full`}
          />
          <h1 className="text-xl text-snow-400">{actionName}</h1>
        </div>
        <span className="text-snow-600 text-sm">
          <span className="text-snow-400">
            {moneyFormatter.format(actionPerQuoteValue)}
          </span>{' '}
          Por cota
        </span>
      </div>

      <div>
        <p className="text-snow-400 text-xl">
          <span className="text-sm text-snow-600">total</span>{' '}
          {moneyFormatter.format(quantityOwned * actionPerQuoteValue)}
        </p>
        <p className="text-snow-600 text-sm text-right">
          {quantityOwned} cota(s)
        </p>
      </div>
    </div>
  )
}
