import React, { useState } from 'react'
import { MdEdit } from 'react-icons/md'
import { BankCard } from './bank-card'
import type { CardProps } from './bank-card'
import { generateRandomId } from '@/utils/generateRandomId'

export function Root() {
  const [cards, setCards] = useState<CardProps[]>([
    {
      cardData: {
        accountType: 'Poupança',
        ammount: 1002032,
        expirationDate: '09/25',
        accountLast4DigitsNumber: 1293,
      },
      isDragAble: false,
    },
    {
      cardData: {
        accountType: 'Débito',
        ammount: 102.12,
        expirationDate: '12/26',
        accountLast4DigitsNumber: 7781,
      },
      isDragAble: false,
      gradientColors: 'greenToLime',
    },
    {
      cardData: {
        accountType: 'Crédito',
        ammount: 991001,
        expirationDate: '12/25',
        accountLast4DigitsNumber: 2212,
      },
      isDragAble: false,
      gradientColors: 'toRemedyRedToLead',
    },
  ])

  function reOrganizeCardsArray() {
    const lastCard = cards[cards.length - 1]
    setCards(prev =>
      prev.filter((card, index) => {
        return index !== prev.length - 1
      })
    )
    setCards(prev => [lastCard, ...prev])
  }

  const zIndex = [30, 40, 50]
  const offsets = [4, 2, 0]

  return (
    <div className="lg:col-span-2 row-span-1 lg:row-span-2 flex flex-col gap-4 px-4 items-center w-full h-full bg-blue-600 overflow-hidden flex-shrink-0">
      <div className="flex items-center w-full justify-between">
        <h1 className="text-snow-200 font-bold text-2xl lg:text-3xl">
          Saldo em contas
        </h1>
        <button
          type="button"
          className="text-snow-600 flex items-center justify-center p-1 border border-snow-800 rounded-lg hover:border-snow-400 hover:text-snow-400 transition-all"
        >
          <MdEdit />
        </button>
      </div>
      <div className="w-full flex items-start justify-start bg-red-800">
        <div className="relative w-full min-h-[300px]">
          {cards.map((card, index) => {
            const currentZIndex = zIndex[index] || 20
            const offset = offsets[index] || 0

            return (
              <BankCard
                key={generateRandomId()}
                cardData={card.cardData}
                isDragAble={index + 1 === cards.length}
                gradientColors={card.gradientColors}
                Zindex={currentZIndex as 20 | 50 | 40 | 30 | undefined}
                offset={offset as 2 | 4 | 6 | 8 | undefined}
                handleDragEnd={reOrganizeCardsArray}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
