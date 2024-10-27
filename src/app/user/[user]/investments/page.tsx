import {
  ExpenseCard,
  type ExpenseCardProps,
} from '@/components/expenses/expenses-card'
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'
import { Chart } from '@/components/graph-component/graph'
import { moneyFormatter } from '@/utils/money-string-formatter'

const someFakeData = [
  { price: 19.23 },
  { price: 19.65 },
  { price: 19.8 },
  { price: 20.05 },
  { price: 20.33 },
  { price: 20.45 },
  { price: 20.7 },
  { price: 21.05 },
  { price: 21.5 },
  { price: 21.87 },
  { price: 22.1 },
  { price: 22.3 },
  { price: 22.15 },
  { price: 21.9 },
  { price: 21.65 },
  { price: 21.5 },
  { price: 21.3 },
  { price: 21.05 },
  { price: 20.9 },
  { price: 20.65 },
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

      <div className="w-full h-full grid grid-cols-6 place-items-center">
        <div className="w-full h-full col-span-4 flex flex-col items-center p-2 gap-2">
          <div className="flex w-full items-center gap-4">
            <ExpenseCard>
              <div className="flex w-full flex-col gap-4">
                <h1 className="text-sm text-snow-600">
                  Previsão de ganhos com investimentos
                </h1>
                <div className="flex items-center justify-center text-4xl font-bold text-snow-400">
                  <p>{moneyFormatter.format(421.21)}</p>
                </div>
              </div>
            </ExpenseCard>

            <ExpenseCard>
              <div className="flex w-full flex-col gap-4">
                <h1 className="text-sm text-snow-600">
                  Total investidos no ultimo mês
                </h1>
                <div className="flex items-center justify-center text-4xl font-bold text-snow-400">
                  <p>{moneyFormatter.format(421.21)}</p>
                </div>
              </div>
            </ExpenseCard>
          </div>

          <div className="flex flex-col w-full flex-1">
            <div className="flex-1 w-full bg-blue-300">
              aqui vai um grafico muito bolado se a minha biblioteca de graficos
              quiser colaborar
            </div>

            <div className="flex items-center justify-between p-2 text-lg">
              <p className="text-snow-600">
                Ações{' '}
                <strong className="font-bold text-snow-400">IVVB11</strong>
              </p>
              <div className="text-snow-600 text-sm font-bold">1 dia</div>
              <p className="text-snow-600">
                Preço médio{' '}
                <strong className="text-apple_green">
                  {moneyFormatter.format(13.91)}
                </strong>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-full bg-blue-500 flex flex-col items-center p-2 gap-2 col-span-2">
          <div className="flex items-center w-full p-2 bg-snow-800 gap-4">
            <div className="size-20 bg-red-400">this is a little square</div>
            <div className="flex flex-col flex-1 gap-1">
              <div className="flex items-center gap-2">
                <div className="size-3 bg-apple_green rounded-full" />
                <h1 className="text-xl text-snow-400">Apple Open Capital</h1>
              </div>
              <span className="text-snow-600 text-sm">
                <span className="text-snow-400">
                  {moneyFormatter.format(12.91)}
                </span>{' '}
                Por cota
              </span>
            </div>

            <div className="">
              <p className="text-snow-400 text-xl">
                total: {moneyFormatter.format(3811.2)}
              </p>
              <p className="text-snow-600 text-sm">320 cota(s)</p>
            </div>
          </div>
          <div className="flex items-center w-full p-2 bg-snow-800 gap-4">
            <div className="size-20 bg-red-400">this is a little square</div>
            <div className="flex flex-col flex-1 gap-1">
              <div className="flex items-center gap-2">
                <div className="size-3 bg-apple_green rounded-full" />
                <h1 className="text-xl text-snow-400">Nvidia Open Capital</h1>
              </div>
              <span className="text-snow-600 text-sm">
                <span className="text-snow-400">
                  {moneyFormatter.format(12.91)}
                </span>{' '}
                Por cota
              </span>
            </div>

            <div className="">
              <p className="text-snow-400 text-xl">
                total: {moneyFormatter.format(3811.2)}
              </p>
              <p className="text-snow-600 text-sm">320 cota(s)</p>
            </div>
          </div>
          <div className="flex items-center w-full p-2 bg-snow-800 gap-4">
            <div className="size-20 bg-red-400">this is a little square</div>
            <div className="flex flex-col flex-1 gap-1">
              <div className="flex items-center gap-2">
                <div className="size-3 bg-apple_green rounded-full" />
                <h1 className="text-xl text-snow-400">Apple Open Capital</h1>
              </div>
              <span className="text-snow-600 text-sm">
                <span className="text-snow-400">
                  {moneyFormatter.format(12.91)}
                </span>{' '}
                Por cota
              </span>
            </div>

            <div className="">
              <p className="text-snow-400 text-xl">
                total: {moneyFormatter.format(3811.2)}
              </p>
              <p className="text-snow-600 text-sm">320 cota(s)</p>
            </div>
          </div>
          <div className="flex items-center w-full p-2 bg-snow-800 gap-4">
            <div className="size-20 bg-red-400">this is a little square</div>
            <div className="flex flex-col flex-1 gap-1">
              <div className="flex items-center gap-2">
                <div className="size-3 bg-apple_green rounded-full" />
                <h1 className="text-xl text-snow-400">Apple Open Capital</h1>
              </div>
              <span className="text-snow-600 text-sm">
                <span className="text-snow-400">
                  {moneyFormatter.format(12.91)}
                </span>{' '}
                Por cota
              </span>
            </div>

            <div className="">
              <p className="text-snow-400 text-xl">
                total: {moneyFormatter.format(3811.2)}
              </p>
              <p className="text-snow-600 text-sm">320 cota(s)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
