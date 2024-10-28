'use client'
import { LineChart, Line, type LineProps, ResponsiveContainer } from 'recharts'
import type { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart'

interface ChartProps extends CategoricalChartProps {
  LineComponentProps: Omit<LineProps, 'ref'> // Omitindo o `ref`
}

export function Chart({
  LineComponentProps,
  data,
  width,
  height,
  ...rest
}: ChartProps) {
  // adicionado width e height
  const deconstructedLine = { ...LineComponentProps }
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ResponsiveContainer minWidth="100%" minHeight="100%">
        <LineChart data={data} width={width} height={height} {...rest}>
          {' '}
          {/* Aplicando width e height */}
          <Line {...deconstructedLine} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
