'use client'
import { ObjectiveHeader } from '@/components/objectives/objectiveHeader'
import { FaHouse } from 'react-icons/fa6'
import {
  ObjectiveCard,
  type ObjectiveCardProps,
} from '@/components/objectives/objectiveCard'
import { SiFerrari } from 'react-icons/si'
import { FaShop } from 'react-icons/fa6'
import { SiFuraffinity } from 'react-icons/si'
import { CircularProgressWithText } from '@/components/circular-progress-with-text'
import { Button } from '@/components/button'
import { FaPlus } from 'react-icons/fa6'
import { FaCar } from 'react-icons/fa'
import { Modal } from '@/components/modal'
import { Input } from '@/components/input'
import { useState } from 'react'
import { generateRandomId } from '@/utils/generateRandomId'
import { z } from 'zod'

export default function ObjectivesPage() {
  const acutualMoney = 450000
  const [isCreateObjectiveModalOpen, setCreateObjectiveModalOpen] =
    useState(false)

  const [objectives, setObjectives] = useState<ObjectiveCardProps[]>([
    {
      objectiveTitle: 'Comprar fursuit',
      actualAmmount: acutualMoney,
      totalAmmount: 40000,
      ObjectiveIcon: SiFuraffinity,
      isCompleted: true,
    },
  ])

  function totalOfCompletedObjectives() {
    const completedObjectives = objectives.filter(
      objective => objective.isCompleted
    )

    return {
      completedObjectives,
      numberOfCompletedObjects: completedObjectives.length,
    }
  }

  function handleObjectiveSubmit() {}

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
              <CircularProgressWithText
                numberOfCompletions={
                  totalOfCompletedObjectives().numberOfCompletedObjects
                }
                totalNumber={objectives.length}
              />
            </div>

            <Button onClick={() => setCreateObjectiveModalOpen(true)}>
              <FaPlus />
              Novo Objetivo
            </Button>
          </div>

          <div className="text-snow-400 flex flex-col items-center gap-2 p-4  flex-1">
            <p>Outros objetivos cadastrados</p>
            <div className="flex flex-col gap-2 w-full px-8 py-2 overflow-y-auto max-h-96">
              {objectives.map((item, index) => {
                return <ObjectiveCard key={generateRandomId()} {...item} />
              })}
            </div>
          </div>
        </div>
      </main>

      <Modal visible={isCreateObjectiveModalOpen}>
        <Modal.Title
          title="Criar novo objetivo"
          desc="Crie um objetivo definindo o nome e seu valor"
          onCloseButtonClick={() => setCreateObjectiveModalOpen(false)}
        />
        <Modal.Body>
          <div className="flex flex-col items-center">
            <form className="w-full flex flex-col gap-2" action="">
              <Input Title="Nome" className="border border-snow-600">
                <Input.Field type="text" />
              </Input>

              <Input Title="Valor" className="border border-snow-600">
                <Input.Field type="text" />
              </Input>

              <Button type="submit" className="mt-5" sizes="md">
                <FaPlus />
                Criar
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  )
}
