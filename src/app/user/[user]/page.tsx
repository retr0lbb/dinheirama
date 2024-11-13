'use client'
import { notFound } from 'next/navigation'
import { Chart } from '@/components/graph-component/graph'
import { RadioButton } from '@/components/radio-button'
import { useCallback, useState } from 'react'
import { FaUber, FaPlaystation } from 'react-icons/fa'
import { FaBowlFood } from 'react-icons/fa6'
import StackedCards from '@/components/stacked-cards'
import { moneyFormatter } from '@/utils/money-string-formatter'

interface UserPageProps {
  params: {
    user: string
  }
}

export default function UserPage({ params }: UserPageProps) {
  const [numberOfRegisters, setNumberOfRegisters] = useState(10)

  const handleRadioChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNumberOfRegisters(Number(event.target.value))
    },
    []
  )

  const { user } = params

  if (!user) {
    notFound()
  }

  return (
    <section className="w-full h-full p-5 overflow-y-hidden flex flex-col gap-5">
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-snow-400 font-bold text-4xl lg:text-6xl">
          Saldo e despesas
        </h1>
        <p className="text-snow-600 lg:text-lg">
          Lembre-se gaste concientemente e mude o seu estilo de vida, esse é o
          primeiro passo para ficar rico
        </p>
      </div>

      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-5 grid-rows-1 lg:grid-rows-3 gap-2 place-content-center overflow-y-scroll">
        <StackedCards.Root />

        <div className="lg:col-span-3 row-span-3 flex flex-col items-center overflow-hidden gap-5 lg:gap-8">
          <div className="flex items-center justify-between w-full px-2 lg:px-8">
            <h1 className="px-4 lg:px-0 lg:text-4xl text-snow-400">
              Saldo e gasto.
            </h1>

            <div className="md:flex gap-2 hidden">
              <RadioButton
                onChange={handleRadioChange}
                sizes="md"
                Label="10 dias"
                name="daysby"
                id="10button"
                value={10}
              />
              <RadioButton
                onChange={handleRadioChange}
                sizes="md"
                Label="15 dias"
                name="daysby"
                id="10button"
                value={15}
              />
              <RadioButton
                onChange={handleRadioChange}
                sizes="md"
                Label="30 dias"
                name="daysby"
                id="10button"
                value={30}
              />
            </div>
          </div>
          <div className="flex w-full h-full flex-1">
            <Chart numberOfRegister={numberOfRegisters} />
          </div>
        </div>

        <div className="flex lg:col-span-2 gap-2 flex-col">
          <div>
            <h1 className="text-2xl lg:text-3xl px-4 lg:px-4 text-snow-400 font-bold">
              Principais gastos
            </h1>
          </div>

          <div className="flex flex-1 items-center gap-3 justify-evenly">
            <div className="bg-danger_red text-snow-200 rounded-2xl p-2 w-full h-auto lg:h-auto aspect-square flex flex-col justify-between">
              <div className="flex flex-col">
                <h1 className="">Alimentação</h1>
                <p className="text-sm font-bold mt-1">
                  {moneyFormatter.format(192.19)}
                </p>
              </div>
              <FaBowlFood className="size-6 text-snow-400" />
            </div>

            <div className="bg-slate-900 border border-snow-400/10 text-snow-200 rounded-2xl p-2 w-full h-auto lg:h-auto aspect-square flex flex-col justify-between">
              <div className="flex flex-col">
                <h1 className="">Transporte</h1>
                <p className="text-sm font-bold mt-1">
                  {moneyFormatter.format(82.32)}
                </p>
              </div>
              <FaUber className="size-6 text-snow-400" />
            </div>

            <div className="bg-dang_blue text-snow-200 rounded-2xl p-2 w-full h-auto lg:h-auto aspect-square flex flex-col justify-between">
              <div className="flex flex-col">
                <h1 className="">Jogos</h1>
                <p className="text-sm font-bold mt-1">
                  {moneyFormatter.format(456.71)}
                </p>
              </div>
              <FaPlaystation className="size-6 text-snow-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
