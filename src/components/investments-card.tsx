import { moneyFormatter } from '@/utils/money-string-formatter'
import { Chart } from './line-chart'

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
  const data = [
    {
      name: 'sales',
      value: 12.1,
    },
    {
      name: 'sales',
      value: 12.9,
    },
    {
      name: 'sales',
      value: 13.2,
    },
    {
      name: 'sales',
      value: 14.3,
    },
    {
      name: 'sales',
      value: 14.3,
    },
    {
      name: 'sales',
      value: 12.9,
    },
    {
      name: 'sales',
      value: 12,
    },
    {
      name: 'sales',
      value: 13.1,
    },
  ]
  return (
    <div className="flex items-center w-full p-2 bg-snow-800 border border-snow-600/30 rounded gap-4">
      <div className="size-20 flex items-center justify-center">
        <Chart
          width={70}
          height={70}
          LineComponentProps={{
            dataKey: 'value',
            type: 'monotone',
            stroke: `${isFalling ? '#ff0000' : '#00ff00'}`,
            strokeWidth: 2,
            dot: false,
            activeDot: undefined,
          }}
          data={data}
        />
      </div>
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
