import {
  ExpenseCard,
  type ExpenseCardProps,
} from '@/components/expenses/expenses-card'
import { moneyFormatter } from '@/utils/money-string-formatter'
import { InvestmentsCard } from '@/components/investments-card'
import { Chart } from '@/components/line-chart'

const sellingData = [
  {
    name: 'IVVB11',
    day: '9 days ago',
    value: 10.8,
  },
  {
    name: 'IVVB11',
    day: '8 days ago',
    value: 10.8,
  },
  {
    name: 'IVVB11',
    day: '7 days ago',
    value: 11.9,
  },
  {
    name: 'IVVB11',
    day: '6 days ago',
    value: 21.91,
  },
  {
    name: 'IVVB11',
    day: '5 days ago',
    value: 22.1,
  },
  {
    name: 'IVVB11',
    day: '4 days ago',
    value: 31.8,
  },
  {
    name: 'IVVB11',
    day: '3 days ago',
    value: 30.2,
  },
  {
    name: 'IVVB11',
    day: '2 days ago',
    value: 30.19,
  },
  {
    name: 'IVVB11',
    day: '1 days ago',
    value: 27.89,
  },
  {
    name: 'IVVB11',
    day: 'now',
    value: 25.49,
  },
]

export default function InvestmentsPage() {
  return (
    <section className="w-full h-full flex flex-col gap-2 p-5">
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-snow-400 font-bold text-6xl">Investimentos</h1>
        <p className="text-snow-600 text-lg">
          Ganhe dinheiro enquanto dorme, a partir de uma certa renda aplique em
          investimentos a longo prazo
        </p>
      </div>

      <div className="w-full h-full grid grid-cols-1 grid-flow-row md:grid-cols-6 md:place-items-center overflow-auto">
        <div className="w-full h-full col-span-1 md:col-span-4 flex flex-col items-center p-2 gap-2">
          <div className="flex w-full items-center gap-4">
            <ExpenseCard>
              <div className="flex w-full flex-col gap-4">
                <h1 className="text-sm text-snow-600">
                  Previsão de ganhos com investimentos
                </h1>
                <div className="flex items-center justify-center text-2xl md:text-4xl font-bold text-snow-400">
                  <p>{moneyFormatter.format(421.21)}</p>
                </div>
              </div>
            </ExpenseCard>

            <ExpenseCard>
              <div className="flex w-full flex-col gap-4">
                <h1 className="text-sm text-snow-600">
                  total investidos no ultimo mês
                </h1>
                <div className="flex items-center justify-center text-2xl md:text-4xl font-bold text-snow-400">
                  <p>{moneyFormatter.format(1021.21)}</p>
                </div>
              </div>
            </ExpenseCard>
          </div>

          <div className="flex flex-col w-full flex-1">
            <div className="flex-1 h-40 w-full border border-snow-800 rounded-lg">
              <Chart
                LineComponentProps={{
                  dataKey: 'value',
                  dot: false,
                  type: 'monotone',
                  stroke: '#00f200',
                  strokeWidth: 5,
                }}
                data={sellingData}
                margin={{
                  bottom: 40,
                  left: 10,
                  right: 10,
                  top: 40,
                }}
              />
            </div>

            <div className="flex items-center justify-between p-2 text-lg">
              <p className="text-snow-600 text-sm">
                Ações{' '}
                <strong className="font-bold text-sm text-snow-400">
                  IVVB11
                </strong>
              </p>
              <div className="text-snow-600 text-sm font-bold">1 dia</div>
              <p className="text-snow-600 text-sm">
                Preço médio{' '}
                <strong className="text-apple_green">
                  {moneyFormatter.format(13.91)}
                </strong>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col items-center gap-2 md:gap-5 md:col-span-2">
          <div>
            <h1 className="text-2xl md:text-3xl text-snow-400 font-bold">
              Minhas ações e fundos
            </h1>
          </div>

          <div className="flex flex-col items-center p-2 gap-3">
            <InvestmentsCard
              actionName="Nvidia Graphics card LET"
              actionPerQuoteValue={99.91}
              quantityOwned={400}
            />

            <InvestmentsCard
              actionName="Apple LtA"
              actionPerQuoteValue={13.12}
              quantityOwned={120}
              isFalling
            />

            <InvestmentsCard
              actionName="IVVB11"
              actionPerQuoteValue={54.92}
              quantityOwned={83}
              isFalling
            />

            <InvestmentsCard
              actionName="XPP918"
              actionPerQuoteValue={81.91}
              quantityOwned={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
