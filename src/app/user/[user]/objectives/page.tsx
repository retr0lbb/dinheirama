import { ObjectiveHeader } from '@/components/objectives/objectiveHeader'
import { FaHouse } from 'react-icons/fa6'
import { ObjectiveCard } from '@/components/objectives/objectiveCard'
import { SiFerrari } from 'react-icons/si'
import { FaShop } from 'react-icons/fa6'
import { SiFuraffinity } from 'react-icons/si'
import { CircularProgressWithText } from '@/components/circular-progress-with-text'
import { Button } from '@/components/button'
import { FaPlus } from 'react-icons/fa6'
import { FaCar } from 'react-icons/fa'

export default function ObjectivesPage() {
  const acutualMoney = 450000
  return (
    <section className="w-full h-full flex flex-col gap-2 p-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-6xl font-bold text-snow-400">Meus Objetivos.</h1>
        <p className="text-snow-600">
          Com objetivos definidos temos mais possibilidade de cumpri-los.
        </p>
      </div>

      <main className="flex-1 flex flex-col">
        <ObjectiveHeader />

        <div className=" flex flex-1 justify-around">
          <div className="flex flex-col gap-3 items-center border py-5 px-10 rounded-xl border-snow-800">
            <h1 className="text-snow-400 font-bold text-3xl">
              Objetivos completados
            </h1>
            <div className="flex flex-1 items-center justify-center">
              <CircularProgressWithText percentage={20} />
            </div>

            <Button>
              <FaPlus />
              Novo Objetivo
            </Button>
          </div>

          <div className="text-snow-400 flex flex-col items-center gap-2 p-4  flex-1">
            <p>Outros objetivos cadastrados</p>
            <div className="flex flex-col gap-2 w-full px-8 py-2 overflow-y-auto max-h-96">
              <ObjectiveCard
                ObjectiveIcon={SiFerrari}
                actualAmmount={450000}
                objectiveTitle="Ferrari spider 2010"
                totalAmmount={4500000}
              />

              <ObjectiveCard
                ObjectiveIcon={FaHouse}
                actualAmmount={450000}
                objectiveTitle="Casa nova"
                totalAmmount={1000000}
              />

              <ObjectiveCard
                ObjectiveIcon={FaShop}
                actualAmmount={450000}
                objectiveTitle="Minha loja online"
                totalAmmount={500000}
              />
              <ObjectiveCard
                isCompleted
                ObjectiveIcon={FaCar}
                actualAmmount={450000}
                objectiveTitle="Carro top de linha"
                totalAmmount={200000}
              />
              <ObjectiveCard
                isCompleted
                ObjectiveIcon={SiFuraffinity}
                actualAmmount={450000}
                objectiveTitle="Fursuit Full-body"
                totalAmmount={40000}
              />
              <ObjectiveCard
                isCompleted
                ObjectiveIcon={SiFuraffinity}
                actualAmmount={450000}
                objectiveTitle="Sair para comer em restaurante"
                totalAmmount={200}
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
