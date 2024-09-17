'use client'
import { notFound } from 'next/navigation'
import { Chart } from '@/components/graph-component/graph'
import { RadioButton } from '@/components/radio-button'
import { useState } from 'react'
import { FaUber, FaPlaystation } from 'react-icons/fa'
import { FaBowlFood } from 'react-icons/fa6'
import StackedCards from '@/components/stacked-cards'

interface UserPageProps {
  params: {
    user: string
  }
}

enum MODAL_CONTROL {
  NONE = 0,
}

export default function UserPage({ params }: UserPageProps) {
  const [numberOfRegisters, setNumberOfRegisters] = useState(10)

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfRegisters(Number(event.target.value))
  }

  const { user } = params

  if (!user) {
    notFound()
  }

  return (
    <section className="w-full h-full p-5 overflow-y-auto flex flex-col gap-5">
      <div className="w-full space-y-1">
        <h1 className="text-snow-400 font-bold text-6xl">Saldo e despesas</h1>
        <p className="text-snow-600 text-lg">
          Lembre-se gaste concientemente e mude o seu estilo de vida, esse é o
          primeiro passo para ficar rico
        </p>
      </div>

      <div className="w-full grid grid-cols-5 grid-rows-3 gap-2">
        <StackedCards.Root />

        <div className="col-span-3 row-span-3 flex flex-col items-center overflow-hidden gap-8">
          <div className="flex items-center justify-between w-full px-8">
            <h1 className="text-4xl text-snow-400">Saldo e gasto.</h1>

            <div className="flex gap-2">
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
          <div className="w-full h-full flex-1">
            <Chart numberOfRegister={numberOfRegisters} />
          </div>
        </div>

        <div className="flex col-span-2 gap-2 flex-col">
          <div>
            <h1 className="text-3xl text-snow-400 font-bold">
              Principais gastos
            </h1>
          </div>

          <div className="flex flex-1 items-center gap-3 justify-around">
            <div className="bg-danger_red text-snow-200 rounded-2xl relative p-2 w-full h-32 flex flex-col">
              <h1 className="">Alimentação</h1>
              <p className="text-sm font-bold mt-1">R$121,98</p>
              <FaBowlFood className="absolute size-6 bottom-4 left-4" />
            </div>

            <div className="bg-dang_blue text-snow-200 rounded-2xl relative p-2 w-full h-32 flex flex-col">
              <h1 className="">Transporte</h1>
              <p className="text-sm font-bold mt-1">R$97,38</p>
              <FaUber className="absolute size-6 bottom-4 left-4" />
            </div>

            <div className="bg-[#7209b7] text-snow-200 rounded-2xl relative p-2 w-full h-32 flex flex-col">
              <h1 className="">Jogos</h1>
              <p className="text-sm font-bold mt-1">R$201,98</p>
              <FaPlaystation className="absolute size-6 bottom-4 left-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
