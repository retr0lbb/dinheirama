import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  AreaChart,
  Area,
} from 'recharts'
import { FinData, generateSmothFakeDataBasedOnValued } from './utils'

interface ChartProps {
  numberOfRegister?: number
}
export function Chart({ numberOfRegister = 10 }: ChartProps) {
  const data: FinData[] = generateSmothFakeDataBasedOnValued(30)

  const slicedData = data.slice(0, numberOfRegister)
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={slicedData}>
          <CartesianGrid strokeDasharray="0 0" strokeOpacity={0.06} />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip wrapperStyle={{ backgroundColor: '#232323' }} />
          <Legend />
          <Area
            activeDot={false}
            type="linear"
            dataKey="gained"
            fill="#72B01D"
            stroke="#72B01D"
          />
          <Area
            activeDot={false}
            type="linear"
            dataKey="expended"
            fill="#D7263D"
            stroke="#D7263D"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}
